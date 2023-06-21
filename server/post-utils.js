const { parse } = require("node-html-parser");

/**
 * @param {Post[]} posts 
 */
const process = (posts) => {
    let processedPosts;
    // There are some posts given to us by RSS that aren't tips.
    processedPosts = posts.filter(item => isTip(item));

    processedPosts = removeDuplicatePosts(processedPosts);
    processedPosts.forEach((post) => {
        /**
         * We'll need to assign our own ID instead of relying on the
         * database to make one for us. This is because the RSS doesn't
         * tell us what blog posts are "new" or not, so we just need
         * to collect all of them and let the database check for uniqueness.
         * Autoincrementing DB IDs will never reject already inserted posts.
         */
        post.id = generatePostID(post);
        post.description = preProcessPostHTML(post.description);
    });

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

/**
 * The Abseil website doesn't mark metadata, but it clearly has some at the
 * beginning of each post. We'll try to use our best guess to mark this
 * metadata so our frontend can improve the blog post's typography.
 */
const preProcessPostHTML = (postHTML) => {
    const root = parse(postHTML);
    const potentialMetadata = root.querySelectorAll("p").slice(0, 5);
    const metaData = potentialMetadata.filter(el => isProbablyBlogMetadata(el));
    let newMetaDataRoot = "<aside class='note' role='note'>";

    for (node of metaData) {
        postHTML = postHTML.replace(node.outerHTML, "");
        /**
         * Quicklinks just link back to the original Abseil site.
         * This is noise for our concerns, and we can implement
         * permalink headers for a better experience anyway.
         */
        if (node.text.indexOf("Quicklink") === -1) newMetaDataRoot += node.outerHTML;
    }

    newMetaDataRoot += "</aside>";
    return newMetaDataRoot + postHTML;
}

/**
 * Best heuristic guess at whether this particular element
 * is an element giving metadata for a blog post.
 */
const isProbablyBlogMetadata = (el) => {
    return (
        el.text.indexOf("By") === 0
        // We don't want to accidentally mark real post content as metadata.
        && el.text.indexOf("By default") !== 0
        && el.text.indexOf("By contrast") !== 0
        && el.text.indexOf("By design") !== 0
    ) ||
        el.text.indexOf("Updated") === 0 ||
        el.text.indexOf("Originally posted") === 0 ||
        el.text.indexOf("Originally published") === 0 ||
        el.text.indexOf("Revised") === 0 ||
        el.text.indexOf("*by") === 0 ||
        el.text.indexOf("Quicklink") === 0 ||
        el.firstChild?.tagName === "EM"
}


module.exports = {
    process,
}