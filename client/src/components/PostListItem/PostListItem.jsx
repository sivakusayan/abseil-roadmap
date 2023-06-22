import style from "./PostListItem.css";

export default function PostListItem({ post, activePostId }) {
    let className = style["post-item"];
    if (activePostId === post.id) className += " " + style["post-item--active"];

    return (
        <li
            id={post.id}
            className={className}
        >
            <a
                href={`/${post.id}`}
                dangerouslySetInnerHTML={{ __html: post.title_html.replace("Tip of the Week ", "Tip ") }}
            />
        </li>
    );
}