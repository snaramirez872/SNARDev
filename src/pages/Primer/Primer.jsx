import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import "./Primer.css";

export default function Primer() {
    return (
        <div className="Primer">
            <NavBar>
                <div className='nav-links'>
                    <Link to='/'><p>Home</p></Link>
                    <Link to='/javascript'><p>JavaScript</p></Link>
                </div>
            </NavBar>
            <h2>Primer</h2>
        </div>
    );
}
