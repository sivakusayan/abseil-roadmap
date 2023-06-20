require("dotenv").config();
const express = require("express");

const { init, getPost, getAllPosts } = require("./database");

const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api/posts", async (req, res) => {
  const { id, fields } = req.query;
  let json;

  if (id) json = await getPost({ id, fields });
  else json = await getAllPosts({ fields });

  res.json(json);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

init();
