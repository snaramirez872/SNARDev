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
                                    <p>In this section, we will be going over the following</p>
                                    <ul>
                                        <li>How to set up your computer for coding projects</li>
                                        <li>What is Git and how to use it</li>
                                    </ul>
                                </div>
                            </div>
                        </PrimerContent>
                    )}
                    {setUp && (
                        <PrimerContent>
                            <div className="setUp">
                                <h1 className="sub-headers">Setting Up</h1>
                                <div className='setup-content'>
                                    <div className="setup-intro">
                                        <p>A computer is a software developer's best friend. It is where a majority, if not all, of our work gets done. 
                                            Setting up your machine to make sure it's ready to go for coding is dependent on the following:
                                        </p>
                                        <ul>
                                            <li>What application you are building and what language you are building it with</li>
                                            <li>What Operating System (and version) that you use</li>
                                            <li>Personal preference</li>
                                        </ul>
                                    </div>
                                    <div className="ide-editor">
                                        <h2>IDE or Text Editor?</h2>
                                        <div className="ide">
                                            <h3>Integrated Development Environment (IDE)</h3>
                                            <p>
                                                An Integrated Development Environment (IDE) is a software application that provides developers with everything 
                                                that they would need when coding: a source code editor, debugger, and build automation tools. Any extra feautres 
                                                are offered on a case-by-case basis. Some examples of IDEs include, but are not limited to:
                                            </p>
                                            <ul>
                                                <li>Microsoft Vsual Studio Community for C and C++</li>
                                                <li>PyCharm for Python</li>
                                                <li>Intellj for Java</li>
                                            </ul>
                                        </div>
                                        <div className="editor">
                                        <h3>Text Editor</h3>
                                        <p>
                                            A Text editor at its core, as implied by the name, is a software application that allows for the inout of text to files that 
                                            can be edited and saved in any format accordingly. Some examples of text editors include, but are not limited to:
                                        </p>
                                        <ul>
                                            <li>Vim for Linux</li>
                                            <li>Notepad for WIndows</li>
                                            <li>Notes for MacOS</li>
                                            <li>Microsoft Visual Studio Code</li>
                                        </ul>
                                        </div>
                                    </div>
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
