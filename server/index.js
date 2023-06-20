require("dotenv").config();
const express = require("express");
const cron = require("node-cron");

const { syncPostsTableWithSource } = require("./database");

const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

cron.schedule("0 0 0 * * *", () => syncPostsTableWithSource);
