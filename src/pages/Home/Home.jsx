import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
    return (
        <div className="Home">
            <div className="header">SNARDev</div>
            <p>Hello! Welcome to SNARDev. If you are completely new to coding, I reccomend starting by going to "Primer". Otherwise, feel free to browse at your own leisure.</p>
            <div className="links">
                <Link to="/primer"><p>Primer</p></Link>
                <Link to="/javascript"><p>JavaScript</p></Link>
            </div>
        </div>
    );
}
