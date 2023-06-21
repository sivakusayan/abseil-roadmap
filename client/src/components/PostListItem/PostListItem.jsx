import style from "./PostListItem.css";

export default function PostListItem({ post, activePostId, setActivePostId }) {
    const handleListItemClick = () => {
        if (activePostId !== post.Id) setActivePostId(post.id);
    }

    let className = style["post-item"];
    if (activePostId === post.id) className += " " + style["post-item--active"];

    return (
        <li
            id={post.id}
            className={className}
            onClick={handleListItemClick}
            dangerouslySetInnerHTML={{ __html: post.title_html.replace("Tip of the Week ", "Tip ") }}
        />
    );
}