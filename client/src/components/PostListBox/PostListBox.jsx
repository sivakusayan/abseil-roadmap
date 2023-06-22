import { useState, useEffect } from "preact/hooks";
import style from "./PostListBox.css";

import PostListItem from "../PostListItem/PostListItem";

export default function PostListBox({ activePostId, readPosts }) {
  const [posts, setPosts] = useState([{ id: 0, title_html: "Home" }]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((fetchedPosts) => setPosts([...posts, ...fetchedPosts]));
  }, []);

  return (
    <ul class={style.posts}>
      {!posts ? "Loading..." : posts.map(post =>
        <PostListItem
          key={post.id}
          post={post}
          isActive={post.id === activePostId}
          isRead={readPosts[post.id]}
        />
      )}
    </ul>
  );
}