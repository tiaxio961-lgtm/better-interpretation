
import React from "react";
import "./Navigation.css";

const Navigation = () => {
    return (
        <nav className="site-nav">
            <ul className="nav-list">
                <li><a href="#home">Home</a></li>
                <li><a href="#basics">Basics</a></li>
                <li><a href="#notes">Note</a></li>
                <li><a href="#tips">Tips</a></li>
                <li><a href="#practice">Practice</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;
