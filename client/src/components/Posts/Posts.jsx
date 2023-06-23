import { useState } from 'preact/hooks';
import { route } from 'preact-router';

import style from "./Posts.css";

import PostListBox from "../PostListBox/PostListBox";
import PostView from "../PostView/PostView";

export default function Posts({ matches }) {
    let activePostId = Number(matches.postId);
    if (!activePostId) {
        activePostId = Number(localStorage.getItem("lastVisitedPostId")) || 1;
        route(`/posts/${activePostId}`);
    }

    const [readPosts, setReadPosts] = useState(
        typeof window !== "undefined" && localStorage.getItem("readPosts") ? JSON.parse(localStorage.getItem("readPosts")) : {}
    );

    const updatePostRead = (postId, isRead) => {
        const readPostsCopy = { ...readPosts };
        if (isRead) {
            readPostsCopy[postId] = true;
        }
        else {
            delete readPostsCopy[postId];
        }
        setReadPosts(readPostsCopy)
        if (typeof window !== "undefined") {
            localStorage.setItem("readPosts", JSON.stringify(readPostsCopy));
        }
    }

    return (
        <div class={style["wrapper"]}>
            <PostListBox
                activePostId={activePostId}
                readPosts={readPosts}
            />
            <PostView
                activePostId={activePostId}
                updatePostRead={updatePostRead}
                isPostRead={readPosts[activePostId]}
            />
        </div>
    );
}
