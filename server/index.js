const express = require("express");
const { getTipsFromRSS } = require("./data");

const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

getTipsFromRSS().then((data) => console.log(data.performanceTips[0]));
