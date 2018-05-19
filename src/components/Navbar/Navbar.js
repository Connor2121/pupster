import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
            
                <Link className="navbar-brand" to="/">
                    Pupster
                </Link>
            
            <ul className="navbar-nav">
                <li
                    className={
                        window.location.pathname === "/" ||
                            window.location.pathname === "/about"
                            ? "active"
                            : ""
                    }
                >
                    <Link to="/">About</Link>
                </li>
                <li
                    className={window.location.pathname === "/discover" ? "active" : ""}
                >
                    <Link to="/discover">Discover</Link>
                </li>
                <li className={window.location.pathname === "/search" ? "active" : ""}
                >
                    <Link to="/search">Search</Link>
                </li>
            </ul>
        
    </nav>
)
export default Navbar;