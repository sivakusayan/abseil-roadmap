/**
 * @fileoverview Caching layer for the server. 
 * Will refresh the cached data every 24 hours.
 */

const NodeCache = require('node-cache');
const cron = require("node-cron");

const { initDatabase, getPosts } = require("./database");

let cache;

const initCache = async () => {
    initDatabase();
    cache = new NodeCache();

    refreshCachedData();
    cron.schedule("0 0 0 * * *", () => refreshCachedData());
}

const refreshCachedData = async () => {
    const posts = await getPosts();
    cache.set("posts", posts.map(post => ({ id: post.id, title_html: post.title_html })), 0);

    for (post of posts) {
        cache.set("post_" + post.id, post, 0);
    }
}

const getCachedPost = (id) => {
    return cache.get("post_" + id) || {};
}

const getCachedPosts = () => {
    return cache.get("posts") || [];
}

module.exports = {
    initCache,
    getCachedPost,
    getCachedPosts
}