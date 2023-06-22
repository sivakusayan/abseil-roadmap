import { Router } from "preact-router";

import "./styles/typography.css";
import "./styles/index.css";

import Home from "./components/Home/Home";

export default function App() {


  return (
    <Router>
      <Home path="/:postId?" />
    </Router>
  );
}
