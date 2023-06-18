const { XMLParser } = require("fast-xml-parser");

const getTipsFromRSS = async () => {
  const RSS_URL = `http://feeds.feedburner.com/abseilio`;

  return fetch(RSS_URL)
    .then((response) => response.text())
    .then((str) => wrangleTipsXML(str));
};

const wrangleTipsXML = (str) => {
  const parser = new XMLParser();
  const allTips = parser
    .parse(str)
    .rss.channel.item.filter((item) => item.title.includes("Tip of the Week"));

  const generalTips = allTips.filter(
    (item) => !item.title.includes("Performance")
  );
  const performanceTips = allTips.filter((item) =>
    item.title.includes("Performance")
  );

  // Just use the tip number as the ID for the database.
  generalTips.forEach((tip) => (tip.id = getTipItemNumber(tip)));
  performanceTips.forEach((tip) => (tip.id = getTipItemNumber(tip)));

  return {
    generalTips,
    performanceTips,
  };
};

// Abseil Tip of the Week titles take the form of
// "Tip of the Week #{Number}: Some title"
const getTipItemNumber = (item) => {
  const title = item.title;
  const start = title.indexOf("#") + 1;
  const end = title.indexOf(":");
  return title.substring(start, end);
};

module.exports = {
  getTipsFromRSS,
};
