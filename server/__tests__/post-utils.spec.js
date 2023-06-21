const { process } = require("../post-utils");

const fakePostHTML = `
<p>Published on 3/2/19</p>
<p>Here is some random content</p>
`;
let fakePost;

describe("process", () => {
    beforeEach(() => {
        fakePost = {
            title: "Tip of the Week #224: Thing",
            description: fakePostHTML,
        }
    });
    test("correctly extracts the ID from the post title", () => {
        process([fakePost]);
        expect(fakePost.id).toBe(224);
    });
    test("correctly offsets the ID of a performance post", () => {
        const fakePerformancePost = {
            title: "Performance " + fakePost.title,
            description: fakePost.description
        };
        process([fakePerformancePost]);
        expect(fakePerformancePost.id).toBe(10224);
    });
    test("correctly replaces the metadata at the beginning of a post with an aside element", () => {
        process([fakePost]);
        expect(fakePost.description.indexOf("<aside")).toBe(0);
    });
});