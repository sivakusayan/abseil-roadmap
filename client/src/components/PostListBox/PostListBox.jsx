import { useState, useEffect } from "preact/hooks";
import style from "./PostListBox.css";

import PostListItem from "../PostListItem/PostListItem";
import { Fragment } from "preact";
import Loader from "../Loader/Loader";

export default function PostListBox({ activePostId, readPosts }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((fetchedPosts) => setPosts([...posts, ...fetchedPosts]));
  }, []);

  return (
    <Fragment>
      <Loader isLoading={posts.length === 1} />
      <ul class={style.posts}>
        {posts.length > 1 && posts.map(post =>
          <PostListItem
            key={post.id}
            post={post}
            isActive={post.id === activePostId}
            isRead={readPosts[post.id]}
          />
        )}
      </ul>
    </Fragment>
  );
}