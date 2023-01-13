export default function Navbar() {
    return (
        <nav class="bg-purple-700 text-white flex justify-between items-start gap-2 text-xl">
            <a href="/" class="text-right font-bold">
                React Playground
            </a>
            <ul class="list-none flex gap-1">
                <li>
                    <a href="/projects">Projects</a>
                </li>
                <li>
                    <a href="/people">People</a>
                </li>
            </ul>
        </nav>
    )
}