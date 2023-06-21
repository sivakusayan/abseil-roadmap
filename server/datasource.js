/**
 * @file Logic relevant to fetching and manipulating data from
 * the original data source of our application, which is the RSS
 * of the Abseil C++ tips blog.
 * https://abseil.io/tips/
 */

const { XMLParser } = require("fast-xml-parser");
const { process } = require("./post-utils");

/**
 * @returns {Promise<Post[]>}
 */
const getPostsFromRSS = async () => {
  const RSS_URL = `http://feeds.feedburner.com/abseilio`;
  let res;

  try {
    res = fetch(RSS_URL)
      .then((response) => response.text())
      .then((str) => wranglePostsXML(str));
  } catch (e) {
    console.error("Failed to fetch post XML: ", e);
  }

  return res;
};

/**
 * @param {string} str The raw XML from the Abseil blog.
 * @returns {Post[]}
 */
const wranglePostsXML = (str) => {
  const parser = new XMLParser();
  let posts = parser.parse(str).rss.channel.item;
  // If there is only a single post, we don't get an array back.
  if (!Array.isArray(posts)) posts = [posts];
  return process(posts);
};

module.exports = {
  getPostsFromRSS,
};
