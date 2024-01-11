import logo from "../assets/Logo.svg";

function Nav() {
    return (
        <header>
            <nav className="navbar">
                <a href="/" className="logo">
                    <img src={logo} alt=""/>
                </a>
                <ul className="nav-links">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                     </li>
                    <li>
                        <a href="/">Menu</a>
                    </li>
                    <li>
                        <a href="/">Reservations</a>
                    </li>
                    <li>
                        <a href="/">Order online</a>
                    </li>
                    <li>
                        <a href="/">Login</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;