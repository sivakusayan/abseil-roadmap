/**
 * @fileOverview Responsible for pre-processing all C++ code examples
 * in an Abseil C++ tip post.
 */

const { JSDOM } = require("jsdom");
const { execFileSync } = require('child_process');
const tmp = require('tmp');
const fs = require('fs');

/**
 * The main reason why we need this is because the code examples on the Abseil
 * site aren't wrapped at a small enough column width. Some code examples can
 * reach up to 100 characters long! Let's try to wrap them here using
 * clang-format.
 * 
 * Note: we could theoretically just use CSS in the front end to wrap the 
 * code examples, but that can potentially break C++ syntax and make for
 * a weird reading experience.
 */
const processCode = (posts) => {
    posts.forEach(post => processCodeForPost(post));
};

const processCodeForPost = async (post) => {
    const dom = new JSDOM(post.description);
    const codeBlocks = dom.window.document.querySelectorAll("pre");
 
    const tmpobj = tmp.fileSync();
    codeBlocks.forEach(codeBlock => {
        fs.writeFileSync(tmpobj.name, codeBlock.textContent);
        // Run ../../node_modules/clang_format/index.js on tmpobj
        execFileSync('node', ['C:\\Development\\abseil-roadmap\\node_modules\\clang-format\\index.js', "-i", "-style=file:" + __dirname + "\\.clang-format", tmpobj.name], { encoding: 'utf8' });
        codeBlock.innerHTML = fs.readFileSync(tmpobj.name, 'utf8');
    });

    tmpobj.removeCallback();
    post.description = dom.serialize();
    console.log("Done processing code for post " + post.id);
}

module.exports = {
    processCode
};