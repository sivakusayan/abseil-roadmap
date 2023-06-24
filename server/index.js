require("dotenv").config();
const express = require("express");

const { initCache, getCachedPosts, getCachedPost } = require("./cache");

const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api/posts", async (req, res) => {
  let json;

  if (req.query.id) {
    json = getCachedPost(req.query.id);
  }
  else {
    json = getCachedPosts();
  }

  res.set('Cache-control', 'public, max-age=86400');
  res.json(json);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

initCache();