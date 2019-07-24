import React, { useState, useEffect } from 'react'
import logo from "./../img/logo.png";
import logotwo from "./../img/logotwo.png";
import './NavBar.css';


function NavBar() {
    const [openHam, setHam] = useState(false)
    const [addSticky, setSticky] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', HandleScroll)
        return () => window.removeEventListener('scroll', HandleScroll);
    }, [])

    function HandleScroll() {
        if (document.documentElement.scrollTop > 100) {
            setSticky(true)
        } else {
            setSticky(false)
        }


    }
    return (
        <div className="navigation">
            <header className='header'>
                <nav className={"nav " + (addSticky === true ? 'sticky' : '')}>
                    <ul>
                        <li><a href="">home</a></li>
                        <li><a href="">features</a></li>
                        <li><a href="">team</a></li>
                        <li><a href="">work</a></li>
                        <li className='logo'>
                            <a href="">
                                <img src={logo} className='white' alt="" />
                                <img src={logo} className='black' alt="" />
                            </a></li>
                        <li><a href="">pricing</a></li>
                        <li><a href="">client</a></li>
                        <li><a href="">blog</a></li>
                        <li><a href="">contact</a></li>
                    </ul>
                    <a className="nav-icon" onClick={() => setHam(true)} href='javscript:void(0);'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </a>
                </nav>
            </header>
            <div style={{ height: '500px' }}></div>
            <div className={"full-nav " + (openHam === true ? 'open' : '')} >
                <div className="logo">
                    <a href="">
                        <img src={logotwo} alt="" />
                    </a>
                </div>
                <nav className="nav2">
                    <ul>
                        <li><a href=""><span>01.</span>Home</a></li>
                        <li><a href=""><span>02.</span>Features</a></li>
                        <li><a href=""><span>03.</span>Team</a></li>
                        <li><a href=""><span>04.</span>Work</a></li>
                        <li><a href=""><span>05.</span>Pricing</a></li>
                        <li><a href=""><span>06.</span>Client</a></li>
                        <li><a href=""><span>07.</span>Blog</a></li>
                        <li><a href=""><span>08.</span>Contact</a></li>
                    </ul>
                </nav>
                <ul className="social-icons list-inline">
                    <li><a href=""><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href=""><i className="fab fa-twitter"></i></a></li>
                    <li><a href=""><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href=""><i className="fab fa-google-plus-g"></i></a></li>
                    <li><a href=""><i className="fab fa-instagram"></i></a></li>
                </ul>
                <div className="corner-circle">
                    <a href="javscript:void(0);" className='nav-close' onClick={() => setHam(false)}><span></span><span></span></a>
                </div>
            </div>
        </div>

    )
}

export default NavBar;