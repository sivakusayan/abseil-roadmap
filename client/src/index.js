import "./styles/index.css";
import { useState, useEffect } from "preact/hooks";

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
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div>
      <h1>Hello, World!</h1>
      <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}
