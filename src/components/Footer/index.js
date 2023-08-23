import React from 'react';


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
    <footer className="flex-row px-1">
      {icons.map(icons =>
      (
        <a href={icons.link} key={icons.name} target="_blank" rel="noopener noreferrer"><i className={icons.name}></i></a>
      )
        )}
    </footer>
  );
}
export default Footer;
