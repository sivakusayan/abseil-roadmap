import { useState, useEffect } from "preact/hooks";
import style from "./PostListBox.css";

import PostListItem from "../PostListItem/PostListItem";

export default function PostListBox({ activePostId, setActivePostId }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
  }, []);

  return (
    <ul class={style.posts}>
      {!posts ? "Loading..." : posts.map(post =>
        <PostListItem
          key={post.id}
          post={post}
          activePostId={activePostId}
          setActivePostId={setActivePostId}
        />
      )}
    </ul>
  );
}