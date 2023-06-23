import { Router, route } from "preact-router";
import { useState, useEffect } from "preact/hooks";
import { Fragment } from "preact";

import "./styles/typography.css";
import "./styles/index.css";

import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import WelcomePost from "./components/WelcomePost/WelcomePost";

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
          <WelcomePost path="/" />
          <Posts path="/posts/:postId?" />
        </Router>
      </main>
    </Fragment>
  );
}
