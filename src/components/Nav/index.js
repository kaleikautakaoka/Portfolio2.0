import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'src/App.css';

const NavComponent = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const openNav = () => {
      setIsNavOpen(true);
  }

    const closeNav = () => {
        setIsNavOpen(false);
    }

    return (
        <div>
            <header className="header_section">
                {/* <div className="container-fluid"> */}
              </header> 
              </div>
 
 );
}

export default NavComponent;