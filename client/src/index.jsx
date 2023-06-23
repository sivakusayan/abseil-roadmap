import { Router, route } from "preact-router";
import { useState, useEffect } from "preact/hooks";
import { Fragment } from "preact";

import "./styles/typography.css";
import "./styles/index.css";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Posts from "./components/Posts/Posts";
import Settings from "./components/Settings/Settings";

export default function App() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const onRouteChange = e => {
    if (e.matches?.postId) {
      localStorage.setItem("lastVisitedPostId", e.matches.postId);
    }
    setIsSidebarActive(e.url.indexOf("/posts") === 0)
  }

  useEffect(() => {
    const lastVisitedPostId = localStorage.getItem("lastVisitedPostId");
    if (lastVisitedPostId) {
      route("/posts/" + lastVisitedPostId);
    }
  }, []);

  return (
    <Fragment>
      <Header isSidebarActive={isSidebarActive} />
      <main>
        <Router onChange={onRouteChange}>
          <Home path="/" />
          <Posts path="/posts/:postId?" />
          <Settings path="/settings" />
        </Router>
      </main>
    </Fragment>
  );
}
