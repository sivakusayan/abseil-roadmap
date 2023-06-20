/**
 * @file Logic relevant to interacting with the database.
 */

const { Client } = require("pg");
const format = require("pg-format");

const { getPostsFromRSS } = require("./dataSource");

const clientConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
};
const client = new Client(clientConfig);

/**
 * Makes sure the cached posts table is in sync with the RSS
 * from the Abseil C++ Tips blog.
 */
const syncPostsTableWithSource = async () => {
  await client.connect();
  try {
    const posts = await getPostsFromRSS();
    const query = format(
      `INSERT INTO posts 
        (id, title_html, content_html, pub_date, link) 
       VALUES %L 
       ON CONFLICT (id) 
        DO UPDATE SET content_html = EXCLUDED.content_html`,
      posts.map((tip) => [
        tip.id,
        tip.title,
        tip.description,
        tip.pubDate,
        tip.link,
      ])
    );

    await client.query("BEGIN");
    await client.query("COMMIT");
  } catch (e) {
    await client.query("ROLLBACK");
    throw e;
  } finally {
    client.end();
  }
};

module.exports = {
  syncPostsTableWithSource,
};
