/**
 * @file Logic relevant to interacting with the database.
 */

const mysql = require('mysql2');
const cron = require("node-cron");

const { getPostsFromRSS } = require("./datasource");

let pool;

const initDatabase = () => {
  pool = mysql.createPool(process.env.DATABASE_CONNECTION_STRING);

  syncPostsTableWithSource();
  cron.schedule("0 0 0 * * *", () => syncPostsTableWithSource);
};

const getPosts = async () => {
  return await sendQuery("SELECT * from posts ORDER BY id ASC");
};

/**
 * @param {string} query A parameterized query.
 * @param {any[]} values The values for the parameterized query.
 * @returns The result of the query.
 */
const sendQuery = async (query, values) => {
  let res;
  try {
    res = await pool.promise().execute(query, values);
  } catch (e) {
    console.error("Couldn't execute query: ", e);
  }

  return res ? res[0] : [];
};

/**
 * @param {string} query A parameterized query.
 * @param {any[]} values The values for the parameterized query.
 */
const sendTransactionQuery = async (query, values) => {
  const connection = await pool.promise().getConnection();
  try {
    await connection.query("BEGIN");
    await connection.query(query, [values]);
    await connection.query("COMMIT");
  } catch (e) {
    await connection.query("ROLLBACK");
    console.error("Couldn't execute transaction query: ", e);
  } finally {
    connection.release();
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
    tip.link
  ]);

  /**
   * Let's make sure to always update the content
   * in case the Abseil website updated one of the
   * posts. The other fields are unlikely to be
   * changed.
   */
  const query = `
  INSERT INTO posts 
    (id, title_html, content_html, pub_date, link) 
  VALUES ?
  ON DUPLICATE KEY UPDATE 
    content_html = VALUES(content_html)`;
  sendTransactionQuery(query, values);
};

module.exports = {
  initDatabase,
  getPosts,
};
