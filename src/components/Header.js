
import React from "react";
import Navigation from "./Navigation";
import "./Header.css";

const Header = () => {
    return (
        <header className="site-header">
            <div className="header-container">
                <h2 className="site-title">
                    Better<br />Interpretation
                </h2>
                <Navigation />
            </div>
        </header>
    );
};

export default Header;
