import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import portfolioBackground from '../../assets/cover/cover-image.jpg';

const NavComponent = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const openNav = () => {
      setIsNavOpen(true);
  }

    const closeNav = () => {
        setIsNavOpen(false);
    }

    return (
        <nav>\<img src={portfolioBackground}
        alt="portfolio background">
        </img>
        <div>
            <header className="header_section">
                {/* <div className="container-fluid"> */}
              </header> 
              </div>
              </nav>
 
 );
}

export default NavComponent;