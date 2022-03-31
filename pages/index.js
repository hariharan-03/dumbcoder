import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Router from 'next/router'
import Link from 'next/link'

export default function Home() {
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
    const handleOpen = () =>{
        if (navigator.share) {
  navigator.share({
    title: 'web.dev',
    text: 'Check out web.dev.',
    url: 'https://web.dev/',
  })
    .then(() => console.log('Successful share'))
    .catch((error) => console.log('Error sharing', error));
}
    }
    return (

        <div>
            <Head>
                <title>Home</title>
                <meta name="description" content="fontend developer in erode. experience with react js and multiple react libraries" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Reggae+One&display=swap" rel="stylesheet" />
                <meta property="og:title" content="Portfolio" />
                <meta property="og:description" content="Personal portfolio for demonstrate my skills." />
                <meta property="og:image" content="images/og-image.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#317EFB"/>
            </Head>
            <div class="header">
                <div class="navbar">
                    <Link href="/"><h3 class='logo'>Hari</h3></Link>
                    <nav>
                        <ul id="menuList">
                            <li><Link href="/"><a class="active">Home</a></Link></li>
                            <li><Link href="/Skills"><a >Skills</a></Link></li>
                            <li><Link href="/Works"><a >Works</a></Link></li>
                            <li><Link href="/Contacts"><a >Contact</a></Link></li>
                        </ul>
                    </nav>
                    <img src="images/menu-icon.png" alt="menuicon" class="menu-icon" onClick={() => togglemenu()} />
                </div>

                <div class="left-sidebar"></div>
                <div class="row">
                    <div class="left-col">
                        <img src="images/IMG20191006113524.png" alt="prof" />
                    </div>
                    <div class="right-col">
                        <h1>I'm <span>Hariharan</span> </h1>
                        <h3 onClick={()=>{handleOpen()}}>Software Engineer.</h3>
                        <p>A passionate Web Developer having an experience of 2+ years in building Web applications with JavaScript / Reactjs / Nextjs / plotlyjs and some other cool libraries and frameworks.</p>
                        <button type="button" class="hiremebtn" onClick={() => { window.open("/Hariharan resume.pdf") }}>Hire me</button>
                        <div class="social-media">
                            <div class="icon">
                                <img src="images/linkedin.png" alt="fb" />
                                <a href="https://www.linkedin.com/in/hari-haran-1a307015a/" target="_blank"><img
                                    src="images/link.png" alt="lnk" /></a>
                            </div>
                            <div class="icon">
                                <img src="images/github.png" alt="fb" />
                                <a href="https://github.com/hariharan-03" target="_blank"><img src="images/link.png"
                                    alt="lnk" /></a>
                            </div>
                            <div class="icon">
                                <img src="images/instagram.png" alt="fb" />
                                <a href="https://www.instagram.com/dumb.apk/" target="_blank"><img src="images/link.png"
                                    alt="lnk" /></a>
                            </div>
                            <div class="icon">
                                <img src="images/indeed.jpg" alt="fb" />
                                <a href="https://my.indeed.com/p/hariharanr-i2slohr" target="_blank"><img src="images/link.png"
                                    alt="lnk" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
