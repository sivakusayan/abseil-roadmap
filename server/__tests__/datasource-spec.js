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
    expect(posts[0]).toMatchObject({
      id: 224,
      title: "Tip of the Week #224: Test",
      description: "Description",
      pubDate: "Date",
      link: "Link",
    });
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
  test("correctly offsets the ID of a performance post", async () => {
    fetch = mockFetch(`
    <rss><channel>
        ${createFakeXMLItem({
          title: "Performance Tip of the Week #224: Test",
        })}
    </channel></rss>`);
    const posts = await getPostsFromRSS();

    expect(posts[0].id).toBe(10224);
  });
});
