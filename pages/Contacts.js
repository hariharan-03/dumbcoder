import React, { useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'



export default function Contacts() {
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
                <title>Contact</title>
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
                            <li><Link href="/Works"><a >Works</a></Link></li>
                            <li><Link href="/Contacts"><a class="active">Contact</a></Link></li>
                        </ul>
                    </nav>
                    <img src="images/menu-icon.png" alt="menuicon" class="menu-icon" onClick={() => togglemenu()} />
                </div>

                <div class="left-sidebar"></div>
                <div class="row">
                    <div class="left-col">
                        <img src="images/contact.png" alt="contact" />
                    </div>

                    <div class="right-col">
                        <div class="form-cover">
                            <div class="social-media">
                                <div class="icon">
                                    <img src="images/phone.png" alt="fb" />
                                    <a href="tel:+919865007511" target="_blank"><img src="images/link.png" alt="lnk" /></a>
                                </div>
                                <div class="icon">
                                    <img src="images/whatsapp.png" alt="fb" />
                                    <a href="https://wa.me/9865007511" target="_blank"><img src="images/link.png" alt="lnk" /></a>
                                </div>
                                <div class="icon">
                                    <img src="images/email.png" alt="fb" />
                                    <a href="mailto:rhariharan461@gmail.com" target="_blank"><img src="images/link.png" alt="lnk" /></a>
                                </div>
                            </div>
                        </div>
                        <div class="address">
                            <div class="location">
                                <p style={{ margin: "0" }}>107, V.O.C nagar, Cauvery R.S,<br />Namakkal-638007, <br />Tamilnadu,<br />India.</p>
                                <p>Ph no: +91 9865007511</p>
                            </div>
                            <div class="map">
                                <iframe width="300" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=old%20attaimill%20street,%20voc%20nagar,%20cauvery%20rs%20pallipalayam+()&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
