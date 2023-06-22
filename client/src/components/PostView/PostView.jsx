import { useState, useEffect } from "preact/hooks";
import style from "./PostView.css";
import { Fragment } from "preact";

import WelcomePost from "../WelcomePost/WelcomePost";

export default function PostView({ activePostId }) {
    const [post, setPost] = useState(null);

    useEffect(() => {
        if (activePostId) {
            fetch(`/api/posts?id=${activePostId}`)
                .then((res) => res.json())
                .then((post) => setPost(post));
        }
        else {
            setPost(null);
        }
    }, [activePostId]);

    return (
        <main class={style["post-view"]}>
            {!post ? <WelcomePost /> :
                <Fragment>
                    <h1 dangerouslySetInnerHTML={{ __html: post.title_html }} />
                    { /** Unfortunately, Fragments don't support dangerouslySetInnerHTML */}
                    <div dangerouslySetInnerHTML={{ __html: post.content_html }} />
                </Fragment>
            }
        </main>
    );
}