import { useState, useEffect } from "preact/hooks";
import style from "./PostListBox.css";

export default function PostListBox({ setActivePostId }) {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
  }, []);

  const handleListItemClick = (e) => {
    setActivePostId(e.target.closest("li").id);
  }

  return (
    <ul class={style.posts}>
      {!posts ? "Loading..." : posts.map(post =>
        <li
          id={post.id}
          key={post.id}
          onClick={handleListItemClick}
          dangerouslySetInnerHTML={{ __html: post.title_html.replace("Tip of the Week ", "Tip ") }}
        />
      )}
    </ul>
  );
}