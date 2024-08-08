import React from "react";
import { Link } from "react-router-dom";
import './NavBar.css';

export default function NavBar({ children }) {
    return (
        <nav className="NavBar">
            <div className="logo">
                <Link to='/'>
                    <p>SNARDev</p>
                </Link>
            </div>
            {children}
        </nav>
    );
}
