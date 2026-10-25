
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
    return (
        <nav className="site-nav">
            <ul className="nav-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/basics">Basics</Link></li>
                <li><Link to="/notes">Note</Link></li>
                <li><Link to="/tips">Tips</Link></li>
                <li><Link to="/practice">Practice</Link></li>
            </ul>
        </nav>
    );
};

export default Navigation;
