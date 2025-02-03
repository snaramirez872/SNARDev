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
                                        <li>What is Git? How do we use it?</li>
                                        <li>Picking a "lane" for programming</li>
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
                                            A Text editor at its core, as implied by the name, is a software application that allows for the input of text to files that 
                                            can be edited and saved in any format accordingly. Some examples of text editors include, but are not limited to:
                                        </p>
                                        <ul>
                                            <li>Vim for Linux</li>
                                            <li>Notepad for WIndows</li>
                                            <li>Notes for MacOS</li>
                                            <li>Microsoft Visual Studio Code</li>
                                        </ul>
                                        </div>
                                        <div className="ide-editor-two">
                                            <div className="ideTwo">
                                                <p>
                                                    An IDE may seem beneficial to you for the fact that everything you need as a developer is provided to you: a means to run your code, 
                                                    a debugger, and various qualify-of-life features depending on the software. The con, however, is that you are locked into 
                                                    one or two coding languages per IDE. This means that if you are a versatile developer that knows several languages, you will have 
                                                    several IDEs installed on your computer. This may seem troublesome if you are looking to save as much storage as possible.
                                                </p>
                                            </div>
                                            <div className="editorTwo">
                                                <p>
                                                    If that's the case, a text editor may be more useful to you. A text editor allows for developing projects in many different languages 
                                                    all from within the same editor. If you go this route, there are still a few things to consider. A text editor won't come with all the 
                                                    bells and whistles that come with an IDE has. One of the few exceptions is Microsoft Visual Studio Code. VS Code comes with a first party 
                                                    debugger and a slew of extensions that you can download. When it comes to actually running your programs you would have to do so manually.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="reccomendation">
                                            <div className="partOne">
                                                <h3>What I Reccomend</h3>
                                                <p>
                                                    In my day-to-day, I personally use Microsoft Visual Studio Code. It is available to download and use for free on Windows, MacOS, and Linux Systems. 
                                                    VS Code can be installed following the link <a href='https://code.visualstudio.com/download' target='_blank' rel='noreferrer'>here</a>.
                                                </p>
                                            </div>
                                            <div className='partTwo'>
                                                <h3>Windows Subsystem for Linux</h3>
                                                <p className='disclaimer'>
                                                    This section is for Windows Users only. MacOS systems do not need an additional tool like WSL to run code. If you use a MacOS or Linux system, you 
                                                    may skip this section and go to "Useful UNIX Commands" below.
                                                </p>
                                                <p className='info'>
                                                    In the event that you are using a text editor and have no way of running your programs, one option you can use is <b>Windows Subsystem for Linux (WSL)</b>. 
                                                    WSL is a feature of Windows 10 and 11 that gives developers and enthusiasts access to a fully-functional Linux terminal from within their Windows device for free. This 
                                                    is very useful for developers on Windows especially. It allows them to use a Linux server natively to run all of their code instead of having to deal with the 
                                                    overhead of switching systems completely or dual-booting. WSL can be installed by following the instructions listed <a href='https://learn.microsoft.com/en-us/windows/wsl/install' target='_blank' rel='noreferrer'>here</a>.
                                                </p>
                                            </div>
                                        </div>
                                        {/* 
                                        TODO
                                        - Add part about UNIX
                                        */}
                                        <div className="unix">
                                            <h3>Useful UNIX Commands and Tips</h3>
                                            <div className="unix-cmd">
                                                <p>
                                                    In WSL, UNIX commands are key. On MacOS and (of course) Linux, these commands are able to be used 100%. Here are a few of the basic ones you will need to start.
                                                </p>
                                                <ul>
                                                    <li><span>mkdir &lt;dir name&gt;</span> - makes a new directory (or folder) with the given name</li>
                                                    <li><span>cd &lt;dir name&gt;</span> - changes the working director to he given one</li>
                                                    <li><span>cd</span> - go back to the home directory</li>
                                                    <li><span>cd ..</span> - go back to the previous directory</li>
                                                    <li><span>touch &lt;file name&gt;</span> - makes a new file with the given name in the current directory</li>
                                                    <li><span>ls -l</span> - lists all of the items present in the current directory with the information about each item such as permissions, size, etc.</li>
                                                    <li><span>rm &lt;file name&gt;</span> - deletes the given file if it exists in the current directory</li>
                                                    <li><span>rm -r &lt;dir name&gt;</span> - deletes the given subdirectory and all of its contents if it exists in the current directory</li>
                                                    <li><span>code .</span> - opens up VS Code using the current directory as the workspace</li>
                                                    <ul>
                                                        <li>MacOS - This command needs to be installed via the terminal first before use.</li>
                                                        <li>WSL - Use of this command will open up a Linux instance of VS Code on your Windows machine</li>
                                                    </ul>
                                                    <li><span>explorer.exe .</span> - (WSL Specific) Opens up the WIndows FIle Explorer to the current directory</li>
                                                    <li><span>cd /mnt/c</span> - (WSL Specific) Accesses your Windows C Drive from WSL</li>
                                                </ul>
                                            </div>
                                            <div className='disclaimer'>
                                                <p>Any other commands like git and those that are used to compile/run code such as node, python3, etc. will be discussed as they ome up later.</p>
                                            </div>
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
