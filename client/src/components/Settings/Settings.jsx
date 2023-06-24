import ThemePicker from "../ThemePicker/ThemePicker";

export default function Settings() {
    return (
        <div className="wrapper">
            <h1>Settings</h1>
            <p>Customize to your heart's content.</p>
            <section>
                <h2>Theme</h2>
                <ThemePicker />
            </section>
            <section>
                <h2>Email Reminders</h2>
            </section>
        </div >
    );
}