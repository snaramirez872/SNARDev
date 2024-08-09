import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

export default function NavBar({ children }) {
    return (
        <nav className="NavBar">
            <div className="logo">
                <Link to='/'>
                    <div>SNARDev</div>
                </Link>
            </div>
            {children}
        </nav>
    );
}
