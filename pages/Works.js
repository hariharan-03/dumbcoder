import React, { useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'



export default function Works() {
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
                <title>Works</title>
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
                            <li><Link href="/Skills"><a >Skills</a></Link></li>
                            <li><Link href="/Works"><a class="active">Works</a></Link></li>
                            <li><Link href="/Contacts"><a >Contact</a></Link></li>
                        </ul>
                    </nav>
                    <img src="images/menu-icon.png" alt="menuicon" class="menu-icon" onClick={() => togglemenu()} />
                </div>

                <div class="left-sidebar"></div>
                <div class="row">
                    <div class="left-col">
                        <img src="images/work.png" alt="work" />
                    </div>

                    <div class="right-col">
                        <div class="card">
                            <div class="cards">
                                <img src="images/chups-logo.png" alt="fb" />
                                <a href="https://www.chups.com/" target="_blank"><img src="images/link.png" alt="lnk" /></a>
                            </div>
                            <div class="cards">
                                <img src="images/chupshop.png" alt="fb" />
                                <a href="http://admin.skycooking.com/" target="_blank"><img src="images/link.png" alt="lnk" /></a>
                            </div>
                            <div class="cards">
                                <img src="images/skoruzai.jpg" alt="fb" />
                                <a href="https://capton.com/" target="_blank"><img src="images/link.png" alt="lnk" /></a>
                            </div>
                            <div class="cards">
                                {/*<h6>Loading..</h6>*/}
                                <img src="images/Logo.png" alt="laslesVPN" />
                                <a href="https://dumbs-lasles-vpn.vercel.app/" target="_blank"><img src="images/link.png" alt="lnk" /></a>
                            </div>
                            <div class="cards">
                                {/*<h6>Loading..</h6>*/}
                                <img src="images/multiform.png" alt="multiform" />
                                <a href="https://trueconnectdemo.vercel.app/" target="_blank"><img src="images/link.png" alt="lnk" /></a>
                            </div>
                                <div class="cards">
                                {/*<h6>Loading..</h6>*/}
                                <img src="images/laceholder-image.jpg" alt="multiform" />
                                <a href="https://dotpay.vercel.app/" target="_blank"><img src="images/link.png" alt="lnk" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
