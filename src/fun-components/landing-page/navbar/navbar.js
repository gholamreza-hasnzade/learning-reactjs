// * import tools
import React from "react";

// * Import style
import "./navbar.css";

const Navbar = () => {
    return (
        <header className="header">
            <h1>Header</h1>
            <nav className="nav">
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Services</a>
            </nav>
        </header>
    );
};

export default Navbar;
