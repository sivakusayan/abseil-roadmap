import { useEffect, useRef } from "preact/hooks";
import style from "./PostListItem.css";

export default function PostListItem({ post, isActive, isRead }) {
    const linkRef = useRef();
    let className = style["post-item"];

    const scrollIntoViewIfNeeded = (target) => {
        if (target.getBoundingClientRect().bottom > window.innerHeight) {
            target.scrollIntoView(false);
        }

        if (target.getBoundingClientRect().top < 0) {
            target.scrollIntoView();
        }
    }

    useEffect(() => {
        if (isActive) {
            /**
             * Hack for chrome. Seems like the scrollIntoView implementation
             * isn't ideal.
             * https://github.com/facebook/react/issues/23396
             */
            setTimeout(() => scrollIntoViewIfNeeded(linkRef?.current), 10);
        }
    }, [isActive])

    if (isActive) {
        className += " " + style["post-item--active"];
    };
    if (isRead) className += " " + style["post-item--read"];

    return (
        <li
            id={post.id}
            className={className}
            ref={linkRef}
        >
            <a
                href={`/posts/${post.id || ""}`}
                dangerouslySetInnerHTML={{ __html: post.title_html.replace("Tip of the Week ", "Tip ") }}
            />
            <div className={style["svg-container"]}>
                {isRead &&
                    <svg viewBox="0 0 101 98.7" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path class={style.draw} d="M93.7 66.9H51v87.9h91V66.1h-17.8l-37.4 64.8-19-18.9-2.8 3.6 23.3 22.5L128 69.5h10.4v80.6H55.1V70.5h42V67z" stroke-opacity="1" transform="translate(-46 -61)" />
                    </svg>
                }
            </div>
        </li>
    );
}