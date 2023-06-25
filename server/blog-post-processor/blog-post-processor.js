/**
 * @file Parses the HTML given by the Abseil RSS feed and
 * makes it more typographically friendly.
 */

const { processText } = require("./blog-post-text-processor.js");
const { processCode } = require ("./blog-post-code-processor");

/**
 * @param {Post[]} posts 
 */
const process = async (posts) => {
    let processedPosts;
    /**
     * There are some posts given to us by the C++ tips RSS that aren't 
     * tips. Weird, I know.
     */
    processedPosts = posts.filter(item => isTip(item));
    // The RSS feed unfortunately gives us duplicate posts.
    processedPosts = removeDuplicatePosts(processedPosts);

    /**
     * We'll need to assign our own ID instead of relying on the
     * database to make one for us. This is because the RSS doesn't
     * tell us what blog posts are "new" or not, so we just need
     * to collect all of them and let the database check for uniqueness.
     * Autoincrementing DB IDs will never reject already inserted posts.
     */
    processedPosts.forEach(post => post.id = generatePostID(post));

    processText(processedPosts);
    await processCode(processedPosts);

    return processedPosts;
}

const isTip = (post) => {
    /**
     * For now, we'll only check for regular tips and performance tips
     * as those are the only types of tips on the Abseil blog.
     * If a post is a performance tip, the title will always
     * start with 'Performance'.
     */
    return (
        post.title.includes("Tip of the Week") &&
        (post.title.indexOf("Tip") === 0 ||
            post.title.indexOf("Performance") === 0)
    );
}

/**
 * @param {Post[]} posts
 * @returns A new array without duplicate posts.
 */
const removeDuplicatePosts = (posts) => {
    const set = new Set();
    return posts.filter((post) => {
        if (set.has(post.title)) return false;
        set.add(post.title);
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
    process,
}