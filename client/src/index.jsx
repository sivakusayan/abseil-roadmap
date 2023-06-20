import "./styles/reset.css";
import "./styles/index.css";
import PostListBox from "./components/PostListBox/PostListBox";

/**
 * Tip test thing.
 * @typedef Tip
 * @type {object}
 * @property {string} id
 * @property {string} title
 * @property {string} description The HTML content of this tip.
 * @property {string} pubDate The publication date of the tip
 * on the Abseil site. Note that this is different from when
 * the tip was written, as a lot of tips are actually much older
 * than when they were published.
 */

export default function App() {
  return (
    <PostListBox />
  );
}
