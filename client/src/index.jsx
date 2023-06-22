import { Router, route } from "preact-router";

import "./styles/typography.css";
import "./styles/index.css";

import Home from "./components/Home/Home";
import { useEffect } from "preact/hooks";

export default function App() {
  const onRouteChange = e => {
    /**
     * We can't overwrite localstorage if this is initial navigation. 
     * If we overwrite here, then we'll change localStorage before
     * the useEffect handler can get to it. It should be okay if the
     * user explicitly specified a post on initial navigation, though.
     */
    if (e.previous || e.matches.postId) {
      localStorage.setItem("lastVisitedPostId", e.matches.postId);
    }
  }

  useEffect(() => {
    const lastVisitedPostId = localStorage.getItem("lastVisitedPostId");
    if (lastVisitedPostId) {
      route("/" + lastVisitedPostId);
    }
  }, []);

  return (
    <Router onChange={onRouteChange}>
      <Home path="/:postId?" />
    </Router>
  );
}
