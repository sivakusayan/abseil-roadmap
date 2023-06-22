import { Fragment } from "preact";

export default function WelcomePost() {
    return (
        <Fragment>
            <h1>Hello! This is a frontend wrapper around <a href="https://abseil.io/tips/">Abseil's C++ tips of the week</a>.</h1>
            <p>This website should be much lighter, and allows you to mark what tips you have or haven't read.</p>
            <p>If you really want to, you can also create an account to sync your read tips across devices, as well as configure email reminders to read a tip you haven't read yet.</p>
        </Fragment>
    );
}