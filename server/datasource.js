/**
 * @file Logic relevant to fetching and manipulating data from
 * the original data source of our application, which is the RSS
 * of the Abseil C++ tips blog.
 * https://abseil.io/tips/
 */

const { XMLParser } = require("fast-xml-parser");
const { process } = require("./blog-post-processor/blog-post-processor");

/**
 * @returns {Promise<Post[]>}
 */
const getPostsFromRSS = async () => {
  const RSS_URL = `http://feeds.feedburner.com/abseilio`;
  let posts;

  try {
    const res = await fetch(RSS_URL);
    const text = await res.text();
    posts = await wranglePostsXML(text);
  } catch (e) {
    console.error("Failed to fetch post XML: ", e);
  }

  return posts;
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
