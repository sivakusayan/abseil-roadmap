const { XMLParser } = require("fast-xml-parser");

const getTipsFromRSS = async () => {
  const RSS_URL = `http://feeds.feedburner.com/abseilio`;

  return fetch(RSS_URL)
    .then((response) => response.text())
    .then((str) => wrangleTipsXML(str));
};

const wrangleTipsXML = (str) => {
  const parser = new XMLParser();
  const tips = parser.parse(str).rss.channel.item.filter((item) => {
    return (
      item.title.includes("Tip of the Week") &&
      (item.title.indexOf("Tip") === 0 ||
        item.title.indexOf("Performance") === 0)
    );
  });

  // Just use the tip number as the ID for the database.
  tips.forEach((tip) => (tip.id = getTipItemNumber(tip)));

  // Unfortunately the RSS we get back has duplicate entries.
  return removeDuplicateTips(tips);
};

const removeDuplicateTips = (tips) => {
  const tipSet = new Set();
  return tips.filter((tip) => {
    if (tipSet.has(tip.id)) return false;
    tipSet.add(tip.id);
    return true;
  });
};

// Abseil Tip of the Week titles take the form of
// "Tip of the Week #{Number}: Some title"
const getTipItemNumber = (item) => {
  const title = item.title;
  const start = title.indexOf("#") + 1;
  const end = title.indexOf(":");
  let ID = Number(title.substring(start, end));
  if (item.title.indexOf("Performance") === 0) return 10000 + ID;
  return ID;
};

module.exports = {
  getTipsFromRSS,
};
