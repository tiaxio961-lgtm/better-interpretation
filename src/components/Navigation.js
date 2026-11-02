
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="site-nav">
            <button
                className="menu-toggle"
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-expanded={menuOpen}
                aria-label="Toggle navigation menu"
            >
                ☰
            </button>

            <ul className={`nav-list ${menuOpen ? "show-menu" : ""}`}>
                <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                <li><Link to="/basics" onClick={closeMenu}>Basics</Link></li>
                <li><Link to="/notes" onClick={closeMenu}>Note</Link></li>
                <li><Link to="/tips" onClick={closeMenu}>Tips</Link></li>
                <li><Link to="/practice" onClick={closeMenu}>Practice</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;
