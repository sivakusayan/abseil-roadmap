export default function Home() {
    return (
        <div className="wrapper">
            <h1>Hello! This is a frontend wrapper around <a href="https://abseil.io/tips/">Abseil's C++ tips of the week</a> that augments its reading experience.</h1>
            <span>This isn't an official website affiliated with the Abseil library, just a random side project of mine.</span>
            <section>
                <h2>This website: </h2>
                <ul>
                    <li>Let's you choose between a dark and light theme.</li>
                    <li>Let's you mark what posts you have or haven't read so you don't waste time finding something new.</li>
                    <li>Saves off the post you last had open as well as what posts you've already read in <code>localstorage</code>.</li>
                    <li>Marks bad code with explicit "Bad code" text instead of just using color to pass <a href="https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html">WCAG Use of Color</a>.</li>
                </ul>
            </section>
            <section>
                <h2>If you want, you can create an account to: </h2>
                <ul>
                    <li>Sync your history across devices.</li>
                    <li>Configure email reminders that send you a random post you haven't read yet.</li>
                </ul>
                I don't sell data, pinkie promise 😇 (and I'm too lazy to figure out how to do that anyway).
            </section>
            <section>
                <h2>Accessibility Considerations</h2>
                <p>I aim to satisfy WCAG 2.1 Level AA, although I'm not against satisfying Level AAA if someone needs it. Since this is a personal project, full disclaimer: </p>
                <ul>
                    <li>I'm probably not going to pay to get it professional vouched by a third party.</li>
                    <li>I haven't done any user testing. I'm able-bodied in every way, so there goes my input.</li>
                </ul>
                <p>
                    On the bright side, what I do have going for me is that I've done professional accessibility work before, so hopefully this app isn't a complete trainwreck! I'm going to list my considerations below, but if there's something I haven't considered or if you find an issue please do reach out on the <a href="https://github.com/sivakusayan/abseil-roadmap/issues">issues page</a>.
                </p>
                <h3>Keyboard navigation</h3>
                <h3>Screen readers</h3>
                <h3>Voice assistants</h3>
                <p>For sighted voice assistant users, all interactive elements should have the same accessible name as their visual text. In other words, you can speak what you see to activate something. Assuming there isn't some kind of weird interoperability bug, anyway.
                </p>
                <p>
                    I don't have access to all types of voice assistants, so if you find an issue on my site when using your program, please do <a href="https://github.com/sivakusayan/abseil-roadmap/issues">let me know</a>.
                </p>
            </section>
        </div >
    );
}