import React from "react";
import '../Navbar/Navbar.css'


function Navbar() {

    return <nav>
        <div className="logo">
            LOGO
        </div>
        <div className="navbar highlightTextIn">
            <div className="container">
                <a href="#" alt="HOME">HOME</a>
                <a href="#" alt="PORTFOLIO">EVENTS</a>
                <a href="#" alt="ARTICLES">TEAM</a>
                <a href="#" alt="ABOUT">ABOUT</a>
            </div>
            <a className="contact" href="#">CONTACT</a>
        </div>
            <div class="menu" >
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">EVENTS</a></li>
                    <li><a href="#">TEAM</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
            </div>
            <div class="toggle">
                <a><i class="fa fa-bars"></i></a>
            </div>

    </nav>
}

export default Navbar;