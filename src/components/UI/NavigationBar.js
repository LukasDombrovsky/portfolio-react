import React, { useEffect, useState } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import classes from './NavigationBar.module.scss';

const NavigationBar = (props) => {
  const [pageScrolled, setPageScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState();

  useEffect(() => {
    const handleScroll = () => {
      setPageScrolled(window.scrollY > 50);
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const linkClickHandler = (event) => {
    setActiveLink(event.target.innerText);
  };

  const links = props.links.map((link) => (
    <a
      key={link}
      className={`${classes.link} ${
        activeLink === link ? classes.active : ''
      } ${pageScrolled ? classes.scrolled : ''}`}
      onClick={linkClickHandler}
      href={`#${link}`}
    >
      {link}
    </a>
  ));

  return (
    <Navbar
      className={`${classes.navbar} ${pageScrolled && classes.scrolled}`}
      expand={props.expand}
      fixed='top'
    >
      <Container fluid={props.fluid}>
        <Navbar.Brand
          className={`${classes.brand} ${pageScrolled && classes.scrolled}`}
          href={`#${props.homeLink}`}
          onClick={linkClickHandler}
        >
          {typeof props.brand === 'string' &&
          (props.brand.includes('jpg') || props.brand.includes('png')) ? (
            <img src={props.brand} alt='Application logo' />
          ) : (
            props.brand
          )}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse className={classes.collapse} id='basic-navbar-nav'>
          <Nav>{links}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
