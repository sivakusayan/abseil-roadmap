import { Fragment } from 'preact';
import { useState } from 'preact/hooks';

import PostListBox from "../PostListBox/PostListBox";
import PostView from "../PostView/PostView";

export default function Home({ matches }) {
    const activePostId = Number(matches.postId);

    return (
        <Fragment>
            <PostListBox
                activePostId={activePostId}
            />
            <PostView
                activePostId={activePostId}
            />
        </Fragment>
    );
}
