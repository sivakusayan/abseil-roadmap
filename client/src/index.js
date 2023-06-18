import "./styles/index.css";
import { useState, useEffect } from "preact/hooks";

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
