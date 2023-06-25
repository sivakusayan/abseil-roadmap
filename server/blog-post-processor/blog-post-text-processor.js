/**
 * @fileOverview Responsible for pre-processing all non-code content
 * of an Abseil C++ tip post. In other words, parses everything that
 * the blog-post-code-processor does not.
 */

const { parse } = require("node-html-parser");

/**
 * @param {Post[]} posts
 * @returns {Post[]}
 */ 
const processText = (posts) => {
    posts.forEach(post => post.description = preProcessPostHTML(post.description));
}

/**
 * The Abseil website doesn't mark metadata, but it clearly has some at the
 * beginning of each post. We'll try to use our best guess to mark this
 * metadata so our frontend can improve the blog post's typography.
 */
const preProcessPostHTML = (postHTML) => {
    const root = parse(postHTML);
    const potentialMetadata = root.querySelectorAll("p").slice(0, 5);
    const metaData = potentialMetadata.filter(el => isProbablyBlogMetadata(el));
    /**
     * Put the metadata candidates inside a new grouping element. This grouped content
     * will replace the metadata at the start of the post.
     */
    let newMetaDataRoot = "<aside class='note' role='note'>";

    for (node of metaData) {
        postHTML = postHTML.replace(node.outerHTML, "");
        /**
         * Quicklinks just link back to the original Abseil site. This 
         * is noise as far as we're concerned, since we already link back to 
         * the original source on the Abseil site in the post footer.
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
    processText
}