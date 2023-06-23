import style from "./Header.css";

export default function Header({ isSidebarActive }) {
    return (
        <header className={isSidebarActive ? style["sidebar-is-active"] : null}>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/settings">Settings</a>
                </li>
                <li>
                    <a href="/posts">Posts</a>
                </li>
            </ul>
        </header>
    );
}
