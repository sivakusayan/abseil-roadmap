import style from "./PostListItem.css";

export default function PostListItem({ post, isActive, isRead }) {
    let className = style["post-item"];
    if (isActive) className += " " + style["post-item--active"];

    return (
        <li
            id={post.id}
            className={className}
        >
            <a
                href={`/${post.id || ""}`}
                dangerouslySetInnerHTML={{ __html: post.title_html.replace("Tip of the Week ", "Tip ") }}
            />
            {isRead && "Read"}
        </li>
    );
}