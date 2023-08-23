import React from 'react';
import coverImage from '../../assets/cover/portfolioBackground.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Sachi Takaoka</h1>
      <img src={coverImage} alt="Tech web"></img>
      {props.children}
    </header>
  );
}

export default Header;
