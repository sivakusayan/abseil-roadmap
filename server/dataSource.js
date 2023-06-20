/**
 * @file Logic relevant to fetching and manipulating data from
 * the original data source of our application, which is the RSS
 * of the Abseil C++ tips blog.
 * https://abseil.io/tips/
 */

const { XMLParser } = require("fast-xml-parser");

/**
 * @returns {Promise<Post[]>}
 */
const getPostsFromRSS = async () => {
  const RSS_URL = `http://feeds.feedburner.com/abseilio`;

  return fetch(RSS_URL)
    .then((response) => response.text())
    .then((str) => wranglePostsXML(str));
};

/**
 * @param {string} str The raw XML from the Abseil blog.
 * @returns {Post[]}
 */
const wranglePostsXML = (str) => {
  const parser = new XMLParser();
  let posts = parser.parse(str).rss.channel.item;
  if (!Array.isArray(posts)) posts = [posts];
  posts = posts.filter((item) => {
    // For now, we'll only check for regular tips and performance tips
    // as those are the only types of tips on the Abseil blog.
    // If a post is a performance tip, the title will always
    // start with 'Performance'.
    return (
      item.title.includes("Tip of the Week") &&
      (item.title.indexOf("Tip") === 0 ||
        item.title.indexOf("Performance") === 0)
    );
  });

  // We'll need to assign our own ID instead of relying on the
  // database to make one for us. This is because the RSS doesn't
  // tell us what blog posts are "new" or not, so we just need
  // to collect all of them and let the database check for uniqueness.
  // Autoincrementing DB IDs will never reject already inserted posts.
  posts.forEach((post) => (post.id = generatePostID(post)));

  posts.forEach((post) => {
    // We can trim down on size even more by removing class names.
    post.description = post.description.replace(/class="(.*?)"/gi, "");
  });

  // The RSS unfortunately gives us back duplicates.
  return removeDuplicatePosts(posts);
};

/**
 * @param {Post[]} posts
 * @returns A new array without duplicate posts.
 */
const removeDuplicatePosts = (posts) => {
  const set = new Set();
  return posts.filter((post) => {
    if (set.has(post.id)) return false;
    set.add(post.id);
    return true;
  });
};

/**
 * @param {Post} post
 * @returns {int}
 */
const generatePostID = (post) => {
  /**
   * Note that post titles look something like:
   * 'Tip of the Week #{Number}: Some title'
   * The post number should suffice as an ID.
   */
  const title = post.title;
  const start = title.indexOf("#") + 1;
  const end = title.indexOf(":");
  let ID = Number(title.substring(start, end));

  /**
   * Recently, there have been a new category of tips called
   * performance tips. These post numbers can overlap with the
   * already existing more general posts. We'll just add an
   * offset as a quick and dirty solution - if we need
   * more categories, we can add more offsets for each.
   *
   * Performance tips will have titles that start with
   * "Performance".
   */
  const PERFORMANCE_ID_OFFSET = 10000;
  if (post.title.indexOf("Performance") === 0)
    return PERFORMANCE_ID_OFFSET + ID;

  return ID;
};

module.exports = {
  getPostsFromRSS,
};
