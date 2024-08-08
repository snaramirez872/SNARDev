import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import './JavaScript.css';

export default function JS() {
    return (
        <div className="JS">
            <NavBar>
                <div className='nav-links'>
                    <Link to='/'><p>Home</p></Link>
                    <Link to='/primer'><p>Primer</p></Link>
                </div>
            </NavBar>
            <h2>JavaScript</h2>
        </div>
    );
}
