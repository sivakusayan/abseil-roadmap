require("dotenv").config();
const express = require("express");

const { init, getPost, getAllPosts } = require("./database");

const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api/posts", async (req, res) => {
  let json;

  if (req.query.id) {
    json = await getPost(req.query.id) || {};
  }
  else {
    json = await getAllPosts();
  }

  res.json(json);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

init();
