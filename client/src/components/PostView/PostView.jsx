import { useState, useEffect } from "preact/hooks";
import style from "./PostView.css";
import { Fragment } from "preact";
import { route } from "preact-router";

import WelcomePost from "../WelcomePost/WelcomePost";

export default function PostView({ activePostId, isPostRead, updatePostRead }) {
    const [post, setPost] = useState(null);

    const setPostIfExists = async (postId) => {
        return fetch(`/api/posts?id=${postId}`)
            .then((res) => res.json())
            .then((post) => {
                if (post?.content_html) {
                    setPost(post);
                }
                else {
                    route("/");
                }
            });
    }

    useEffect(() => {
        if (activePostId) {
            setPostIfExists(activePostId);
        }
        else {
            setPost(null);
        }
    }, [activePostId]);

    const handleToggleButtonClick = () => {
        updatePostRead(post.id, !isPostRead);
    };

    return (
        <main class={style["post-view"]}>
            {!post ? <WelcomePost /> :
                <Fragment>
                    <h1 dangerouslySetInnerHTML={{ __html: post.title_html }} />
                    { /** Unfortunately, Fragments don't support dangerouslySetInnerHTML */}
                    <div dangerouslySetInnerHTML={{ __html: post.content_html }} />
                    <button onClick={handleToggleButtonClick}>{isPostRead ? "Mark Unread" : "Mark Read"}</button>
                    <a target="_blank" href={post.link}>Original source (opens in new window)</a>
                </Fragment>
            }
        </main>
    );
}