import React from 'react';
import {
  FooterContainer, 
  FooterLink,
  FooterIcon,
  // FooterP,
  FooterSpan,
  // FooterDiv
} from '../styles/FooterStyles';
import { animateScroll as scroll } from 'react-scroll';

const toTop = () => {
  scroll.scrollToTop({ delay: 1, duration: 1 });
};


function Footer() {

  const icons = [
    {
      name: "fab-brands fa-github",
      link: "https://github.com/kaleikautakaoka/"
    },
    {
      name: "fab-brands fa-linkedin",
      link: "https://www.linkedin.com/in/sachi-undefined-06a01b243/"
    },
    {
      name: "fab-brands fa-stack-overflow",
      link: "https://stackoverflow.com/users/22385744/kaleikautakaoka"
    }
  ]
  return (
    <FooterContainer>
     <FooterLink href="https://stackoverflow.com/users/22385744/kaleikautakaoka/" terget="_blank" rel="noopener noreferrer">Stack OverFlow</FooterLink>
      <FooterSpan> | </FooterSpan>
     <FooterLink href="https://www.linkden.com/in/sachi-undefined-06a01b243/" terget="_blank" rel="noopener noreferrer">Linkden</FooterLink>
      <FooterSpan> | </FooterSpan>
      
      <FooterIcon className="fab-brands fa-github"></FooterIcon>
      <FooterLink href="https://github.com/kaleikautakaoka/" terget="_blank" rel="noopener noreferrer">GitHub</FooterLink>
      <FooterIcon className="fas fa-arrow-circle-up" onClick={toTop}></FooterIcon>
      {icons.map(icons =>
      (
        <a href={icons.link} key={icons.name} target="_blank" rel="noopener noreferrer"><i className={icons.name}></i></a>
      )
        )}
    </FooterContainer>
  );
}
export default Footer;
