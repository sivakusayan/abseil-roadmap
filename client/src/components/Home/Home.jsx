import { Fragment } from 'preact';
import { useState } from 'preact/hooks';

import PostListBox from "../PostListBox/PostListBox";
import PostView from "../PostView/PostView";

export default function Home({ matches }) {
    const activePostId = Number(matches.postId);
    const [readPosts, setReadPosts] = useState(
        localStorage.getItem("readPosts") ? JSON.parse(localStorage.getItem("readPosts")) : {}
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
        localStorage.setItem("readPosts", JSON.stringify(readPostsCopy));
    }

    return (
        <Fragment>
            <PostListBox
                activePostId={activePostId}
                readPosts={readPosts}
            />
            <PostView
                activePostId={activePostId}
                updatePostRead={updatePostRead}
                isPostRead={readPosts[activePostId]}
            />
        </Fragment>
    );
}
