import { useRef, useContext } from "preact/hooks";
import { ThemeContext } from "../../contexts/ThemeContextProvider";

import style from "./ThemePicker.css"

export default function ThemePicker() {
    const { setTheme } = useContext(ThemeContext);

    const onChange = (e) => {
        setTheme(e.target.value);
    }

    return (
        <div class={style["select-wrapper"]}>
            <select onChange={onChange}>
                <option disabled="" selected="">Select Theme</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="">System</option>
            </select>
        </div>
    );
}