const { Client } = require("pg");
const format = require("pg-format");

const { getTipsFromRSS } = require("./dataSource");

const clientConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
};
const client = new Client(clientConfig);

const getInsertArrayFromTip = (tip) => {
  return [tip.id, tip.title, tip.description, tip.pubDate, tip.link];
};

const updateDatabase = async () => {
  await client.connect();
  try {
    const tips = await getTipsFromRSS();
    const tipsToInsert = tips.map((tip) => getInsertArrayFromTip(tip));
    // We'll need to pull in updates to content if they exist from the source material.
    const query = format(
      "INSERT INTO tips (id, title, content_html, pub_date, link) VALUES %L ON CONFLICT (id) DO UPDATE SET content_html = EXCLUDED.content_html",
      tipsToInsert
    );

    await client.query("BEGIN");
    const res = await client.query(query);
    console.log(res);
    await client.query("COMMIT");
  } catch (e) {
    await client.query("ROLLBACK");
    throw e;
  } finally {
    client.end();
  }
};

module.exports = {
  updateDatabase,
};
