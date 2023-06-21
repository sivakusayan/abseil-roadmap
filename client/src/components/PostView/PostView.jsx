import { useState, useEffect } from "preact/hooks";
import style from "./PostView.css";
import { Fragment } from "preact";

export default function PostView({ activePostId }) {
    const [post, setPost] = useState(null);

    useEffect(() => {
        if (activePostId) {
            fetch(`/api/posts?id=${activePostId}`)
                .then((res) => res.json())
                .then((post) => setPost(post));
        }
    }, [activePostId]);

    return (
        <main class={style["post-view"]}>
            {!post ? "Loading..." :
                <Fragment>
                    <h1 dangerouslySetInnerHTML={{ __html: post.title_html }} />
                    { /** Unfortunately, Fragments don't support dangerouslySetInnerHTML */}
                    <div dangerouslySetInnerHTML={{ __html: post.content_html }} />
                </Fragment>
            }
        </main>
    );
}