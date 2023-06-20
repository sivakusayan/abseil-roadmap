import { useState, useEffect } from "preact/hooks";
import style from "./PostListBox.css";

export default function PostListBox() {
    const [posts, setPosts] = useState(null);
  
    useEffect(() => {
      fetch("/api/posts?fields=id,title_html")
        .then((res) => res.json())
        .then((posts) => setPosts(posts));
    }, []);
  
    return (
      <ul class={style.posts}>
        {!posts ? "Loading..." : posts.map(post => <li dangerouslySetInnerHTML={{__html: post.title_html}} />)}
      </ul>
    );
  }