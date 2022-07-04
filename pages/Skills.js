import React, { useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'



export default function Skills() {
    useEffect(() => {
        var menuList = document.getElementById("menuList");

        menuList.style.maxHeight = "0px";

    }, [])
    const togglemenu = () => {
        if (menuList.style.maxHeight == "0px") {
            menuList.style.maxHeight = "186px";
        } else {
            menuList.style.maxHeight = "0px";
        }
    }
    return (
        <div>
            <Head>
                <title>Skills</title>
                <meta name="description" content="fontend developer in erode. experience with react js and multiple react libraries" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Reggae+One&display=swap" rel="stylesheet" />
            </Head>
            <div class="header">
                <div class="navbar">
                    <Link href="/"><h3 class='logo'>Hari</h3></Link>
                    <nav>
                        <ul id="menuList">
                            <li><Link href="/"><a >Home</a></Link></li>
                            <li><Link href="/Skills"><a class="active">Skills</a></Link></li>
                            <li><Link href="/Works"><a >Works</a></Link></li>
                            <li><Link href="/Contacts"><a >Contact</a></Link></li>
                        </ul>
                    </nav>
                    <img src="images/menu-icon.png" alt="menuicon" class="menu-icon" onClick={() => togglemenu()} />
                </div>

                <div class="left-sidebar"></div>
                <div class="row">
                    <div class="left-col">
                        <img src="images/skill.png" alt="skills" />
                    </div>

                    <div class="right-col">
                        <div class="bar-container">
                            <h2>React js</h2>
                            <div class="meter">
                                <span style={{ width: '100%' }}><span class="progress1"></span></span>
                            </div>
                            <h2>Next js</h2>
                            <div class="meter">
                                <span style={{ width: '100%' }}><span class="progress6"></span></span>
                            </div>
                            <h2>HTML</h2>
                            <div class="meter">
                                <span style={{ width: '100%' }}><span class="progress2"></span></span>
                            </div>
                            <h2>CSS</h2>
                            <div class="meter">
                                <span style={{ width: '100%' }}><span class="progress3"></span></span>
                            </div>
                            <h2>Javascript</h2>
                            <div class="meter">
                                <span style={{ width: '100%' }}><span class="progress4"></span></span>
                            </div>
                            <h2>JQuery</h2>
                            <div class="meter">
                                <span style={{ width: '100%' }}><span class="progress5"></span></span>
                            </div>
                            <h2>Plotly js</h2>
                            <div class="meter">
                                <span style={{ width: '100%' }}><span class="progress7"></span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
