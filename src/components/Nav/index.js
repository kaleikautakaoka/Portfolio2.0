import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import portfolioBackground from '../../assets/cover/portfolioBackground.jpg';
import './index.css'
import { flowContext } from '../../functionality/flow';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
// import { projects } from '../../data';
// import { Contact } from '../Contact';
// import { About } from '../About';
// import { Project } from '../Project';
// import { Resume } from '../Resume';
// import { Portfolio } from '../Portfolio';


const NavComponent = () => {
    const [{ flowName, toggleFlow }] = useContext(flowContext);
    const [ showNav, setNav ] = useState(false);

    const toggleNav = () => setNav(!showNav); 

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul style={{display: showNav ? 'flex' : null}} className="container-fluid">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#about" onClick={toggleNav}>About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#portfolio" onClick={toggleNav}>Portfolio</a>

                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#resume" onClick={toggleNav}>Resume</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#contact" onClick={toggleNav}>Contact</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#projects" onClick={toggleNav}>Projects</a>
                </li>
                <a className="navbar-brand"
                href='#projects'
                onClick={toggleFlow}>
                    <img src={portfolioBackground} alt="Sachi's Portfolio" />
                </a>
                { flowName === 'light' ? <img src={sun} alt='sun' /> : <img src={moon} alt='moon' /> }

                <button className="navbar-toggler"
                type="button"
                onClick={toggleNav}>
                    <span className="navbar-toggler-icon"></span>
                </button>
            </ul>
        </nav>
    )
}



export default NavComponent;