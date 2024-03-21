import React from 'react';
import "./header.css"
function Header(props) {
    return (
        <>
            <div className="container">
                <nav className="navbar navbar-expand-md ">

                    <button className="navbar-toggler " type="button" data-toggle="collapse"
                            data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon">
                            <img className="text-dark" src="./images/burger.svg" alt="Error"/>
                        </span>
                    </button>

                    <div className="collapse navbar-collapse " id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-dark font-weight-bold" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-muted font-weight-bold" href="#">About me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-muted font-weight-bold" href="#">Skills</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link text-muted font-weight-bold" href="#">Portfolio</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link text-muted font-weight-bold" href="#">Contacts</a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="header-line"></div>



            </div>
        </>
    );
}

export default Header;