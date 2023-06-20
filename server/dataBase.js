/**
 * @file Logic relevant to interacting with the database.
 */

const { Pool } = require("pg");
const format = require("pg-format");
const cron = require("node-cron");

const { getPostsFromRSS } = require("./datasource");

let pool;

const init = () => {
  const clientConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
  };
  pool = new Pool(clientConfig);
  syncPostsTableWithSource();
};

const getPost = async ({ fields, id }) => {
  if (!fields) fields = "*";
  const query = format("SELECT %s from posts WHERE id=%s", fields, id);
  return await sendQuery(query);
};

const getAllPosts = async ({ fields }) => {
  if (!fields) fields = "*";
  const query = format("SELECT %s from posts ORDER BY id ASC", fields);
  return await sendQuery(query);
};

/**
 * @param {string} query Query to execute. Note that you
 * MUST create this string using the pg-format library
 * to prevent SQL injections.
 * @returns The result of the query.
 */
const sendQuery = async (query) => {
  let res;
  const client = await pool.connect();
  try {
    res = await client.query(query);
  } catch (e) {
    console.error("Couldn't execute query: ", e);
  } finally {
    client.release();
  }
  return res ? res.rows : [];
};

/**
 * @param {string} transaction transaction to execute. Note that you
 * MUST create this string using the pg-format library
 * to prevent SQL injections.
 */
const sendTransactionQuery = async (transaction) => {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    await client.query(transaction);
    await client.query("COMMIT");
  } catch (e) {
    await client.query("ROLLBACK");
    console.error("Couldn't execute transaction query: ", e);
  } finally {
    client.release();
  }
};

/**
 * Makes sure the cached posts table is in sync with the RSS
 * from the Abseil C++ Tips blog.
 */
const syncPostsTableWithSource = async () => {
  const posts = await getPostsFromRSS();
  const values = posts.map((tip) => [
    tip.id,
    tip.title,
    tip.description,
    tip.pubDate,
    tip.link,
  ]);

  /**
   * Let's make sure to always update the content
   * in case the Abseil website updated one of the
   * posts. The other fields are unlikely to be
   * changed.
   */
  const query = format(
    `INSERT INTO posts 
        (id, title_html, content_html, pub_date, link) 
    VALUES %L 
    ON CONFLICT (id) 
        DO UPDATE SET content_html = EXCLUDED.content_html`,
    values
  );
  sendTransactionQuery(query);
};
cron.schedule("0 0 0 * * *", () => syncPostsTableWithSource);

module.exports = {
  init,
  getPost,
  getAllPosts,
};
