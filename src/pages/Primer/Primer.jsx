import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import PrimerContent from "./PrimerContent";
import "./Primer.css";

export default function Primer() {
    const[intro, setIntro] = useState(false);
    const[setUp, setSquared] = useState(false); // setSquared is the set State function for setUp
    const[git, setGit] = useState(false);

    function openIntro() {
        //console.log("clicked 1"); // was used for debugging
        setIntro(true);
        setSquared(false);
        setGit(false);
    }
    
    function openSetUp() {
        //console.log("clicked 2"); // was used for debugging
        setIntro(false);
        setSquared(true);
        setGit(false);
    }

    function openGit() {
        //console.log("clicked 3"); // was used for debugging
        setIntro(false);
        setSquared(false);
        setGit(true);
    }

    return (
        <div className="Primer">
            <NavBar>
                <div className='nav-links'>
                    <Link to='/'><p>Home</p></Link>
                    <Link to='/javascript'><p>JavaScript</p></Link>
                </div>
            </NavBar>
            <div className="primer-stuff">
                <div className="side">
                    <h1 className='title'>Coding Primer</h1>
                    <div className='menu'>
                        <div id="topics" onClick={openIntro} className={intro ? "primer-active" : ""}>
                            <p>Introduction</p>
                        </div>
                        <div id="topics" onClick={openSetUp} className={setUp ? "primer-active" : ""}>
                            <p>Setting Up</p>
                        </div>
                        <div id="topics" onClick={openGit} className={git ? "primer-active" : ""}>
                            <p>Git</p>
                        </div>
                    </div>
                </div>
                <div className="prim-content">
                    {intro && (
                        <PrimerContent>
                            <div className="introduction">
                                <h1 className="sub-headers">Introduction</h1>
                                <div className='intro-content'>
                                    <p>[CONTENT HERE]</p>
                                </div>
                            </div>
                        </PrimerContent>
                    )}
                    {setUp && (
                        <PrimerContent>
                            <div className="setUp">
                                <h1 className="sub-headers">Setting Up</h1>
                                <div className='setup-content'>
                                    <p>[CONTENT HERE]</p>
                                </div>
                            </div>
                        </PrimerContent>
                    )}
                    {git && (
                        <PrimerContent>
                            <div className="git">
                                <h1 className="sub-headers">Git</h1>
                                <div className='git-content'>
                                    <p>[CONTENT HERE]</p>
                                </div>
                            </div>
                        </PrimerContent>
                    )}
                </div>
            </div>
        </div>
    );
}
