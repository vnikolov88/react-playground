export default function Navbar() {
    return (
        <nav className="bg-purple-700 text-white flex justify-between items-start gap-2 text-xl">
            <a href="/" className="text-right font-bold">
                React Playground
            </a>
            <ul className="list-none flex gap-1">
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