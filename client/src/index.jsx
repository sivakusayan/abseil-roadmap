import { Router, route } from "preact-router";
import { useState, useEffect, useContext } from "preact/hooks";
import { Fragment } from "preact";

import "./styles/typography.css";
import "./styles/index.css";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Posts from "./components/Posts/Posts";
import Settings from "./components/Settings/Settings";
import { ThemeContext, ThemeContextProvider } from "./contexts/ThemeContextProvider";

export default function ContextRoot() {
  return (
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  );
}

const App = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const { theme } = useContext(ThemeContext);

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

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Fragment>
      <Header isSidebarActive={isSidebarActive} />
      <main>
        <Router onChange={onRouteChange}>
          <Home default path="/" />
          <Posts path="/posts/:postId?" />
          <Settings path="/settings" />
        </Router>
      </main>
    </Fragment>
  );
}
