import { Link } from "react-router-dom"
export default function Navbar() {
    return <nav className="nav">
        <Link to="/" className="site-title">LN</Link>
        <ul>
            <li className="active">
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/project">Project</Link>
                </li>
                <li>
                <Link to="/resume">Resume</Link>
                </li>
        </ul>

    </nav>
}

