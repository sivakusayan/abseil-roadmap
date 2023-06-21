const { getPostsFromRSS } = require("../datasource");

const mockFetch = (xml) => {
  return jest.fn(() =>
    Promise.resolve({
      text: () => Promise.resolve(xml),
    })
  );
};

const createFakeXMLItem = ({ title, description, pubDate, link }) => {
  if (!title) title = "Title";
  if (!description) description = "Description";
  if (!pubDate) pubDate = "Date";
  if (!link) link = "Link";
  return `<item>
            <title>${title}</title>
            <description>${description}</description>
            <pubDate>${pubDate}</pubDate>
            <link>${link}</link>
          </item>`;
};

describe("getPostsFromRSS", () => {

  test("returns a correctly shaped Post object", async () => {
    fetch = mockFetch(`
        <rss><channel>
            ${createFakeXMLItem({ title: "Tip of the Week #224: Test" })}
        </channel></rss>`);
    const posts = await getPostsFromRSS();

    expect(posts.length).toBe(1);
    expect(posts[0].id).not.toBeNull();
    expect(posts[0].title).not.toBeNull();
    expect(posts[0].description).not.toBeNull();
    expect(posts[0].pubDate).not.toBeNull();
    expect(posts[0].link).not.toBeNull();
  });

  test("Ignores posts that are not tips", async () => {
    fetch = mockFetch(`
    <rss><channel>
        ${createFakeXMLItem({})}
    </channel></rss>`);
    const posts = await getPostsFromRSS();

    expect(posts.length).toBe(0);
  });

  test("ignores duplicate posts in the RSS feed", async () => {
    fetch = mockFetch(`
    <rss><channel>
        ${createFakeXMLItem({ title: "Tip of the Week #224: Test" }).repeat(2)}
    </channel></rss>`);
    const posts = await getPostsFromRSS();

    expect(posts.length).toBe(1);
  });
});
