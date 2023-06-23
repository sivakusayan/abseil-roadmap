import { useState, useEffect } from "preact/hooks";
import { Fragment } from "preact";
import { route } from "preact-router";

import style from "./PostView.css";
import Loader from "../Loader/Loader";
import WelcomePost from "../WelcomePost/WelcomePost";

export default function PostView({ activePostId, isPostRead, updatePostRead }) {
    const [post, setPost] = useState(null);
    const [fetchRequestCount, setFetchRequestCount] = useState(0);

    const setPostIfExists = async (postId) => {
        setFetchRequestCount(prev => prev + 1);
        return fetch(`/api/posts?id=${postId}`)
            .then((res) => res.json())
            .then((post) => {
                if (post?.content_html) {
                    setPost(post);
                }
                else {
                    route("/");
                }
                setFetchRequestCount(prev => prev - 1);
            });
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [post]);

    useEffect(() => {
        if (activePostId) {
            setPostIfExists(activePostId);
        }
    }, [activePostId]);

    const handleToggleButtonClick = () => {
        updatePostRead(post.id, !isPostRead);
    };

    return (
        <article
            inert={fetchRequestCount > 0}
            class={style["post-view"]}
        >
            <Loader isLoading={fetchRequestCount > 0} />
            {post &&
                <Fragment>
                    <h1 dangerouslySetInnerHTML={{ __html: post.title_html }} />
                    { /** Unfortunately, Fragments don't support dangerouslySetInnerHTML */}
                    <div dangerouslySetInnerHTML={{ __html: post.content_html }} />
                    <div class={style["post-footer"]}>
                        <button
                            class={"btn" + (isPostRead ? "" : " btn-primary")}
                            onClick={handleToggleButtonClick}>
                            {isPostRead ? "Mark Unread" : "Mark Read"}
                        </button>
                        <a rel="noopener" target="_blank" href={post.link}>Original source (opens in new window)</a>
                    </div>
                </Fragment>
            }
        </article>
    );
}