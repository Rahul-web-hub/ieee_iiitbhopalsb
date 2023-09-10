import React from "react";

function Navbar() {



    function open() {

        const toggleBtnIcon = document.querySelector('.toggle_btn i')
        const dropDownMenu = document.querySelector('.dropdown_menu')
        dropDownMenu.classList.toggle('open')
        const isOpen = dropDownMenu.classList.contains('open')

        toggleBtnIcon.classList = isOpen
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars'
    }

    return <header>
        <div className="navbar">
            <div className="logo"><a href="#">IEEE</a></div>
            <ul className="links">
                <li><a href="home">Home</a></li>
                <li><a href="about">About</a></li>
                <li><a href="Team">Team</a></li>
                {/* <li><a href="contact">Contact</a></li> */}
            </ul>
            <a href="#" className="action_btn">Contact Us</a>
            <div className="toggle_btn" onClick={open}>
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>

        <div className="dropdown_menu">
            <li><a href="home">Home</a></li>
            <li><a href="about">About</a></li>
            <li><a href="services">Team</a></li>
            {/* <li><a href="contact">Contact</a></li> */}
            <li><a href="#" className="action_btn">Contact Us</a></li>
        </div>
    </header>

}

export default Navbar;