import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import portfolioBackground from '../../assets/cover/cover-image.jpg';
import { icons } from '../../data';
import './index.css'
import { flowContext } from '../../functionality/flow';


const NavComponent = () => {
    const [{ flowName, toggleFlow }] = useState(flowContext);
    const [ showNav, setNav ] = useState(false);

    const toggleNav = () => setNav(!showNav); 

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#home">Sachi Kautakaoka</a>
                <button className="navbar-toggler" type="button" onClick={toggleNav}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${showNav ? 'show' : ''}`}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#resume">Resume</a>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <button className="btn btn-outline-dark" onClick={toggleFlow}>
                            <i className={icons[flowName]}></i>
                        </button>; 
                    </div>
                </div>
            </div>
        </nav>
    );

}

export default NavComponent;