
import { createContext } from "preact";
import { useState } from "preact/hooks";

export const ThemeContext = createContext("");

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}