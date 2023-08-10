import { useEffect, useState } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import classes from './NavBar.module.scss';

interface NavBarProps {
  brand: string;
  homeLink: string;
  links: string[];
  expand: string;
}

const NavBar: React.FC<NavBarProps> = (props) => {
  const { brand, homeLink, links, expand } = props;

  const [pageScrolled, setPageScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setPageScrolled(window.scrollY > 50);
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const linkClickHandler = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    setActiveLink(e.currentTarget.innerHTML);
  };

  const linksFormatted = links.map((link) => (
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
      expand={expand}
      fixed='top'
      variant={pageScrolled ? 'light' : 'dark'}
    >
      <Container>
        <Navbar.Brand
          className={`${classes.brand} ${pageScrolled && classes.scrolled}`}
          href={`#${homeLink}`}
          onClick={linkClickHandler}
        >
          {typeof brand === 'string' &&
          (brand.includes('jpg') || brand.includes('png')) ? (
            <img src={brand} alt='Application logo' />
          ) : (
            brand
          )}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse className={classes.collapse} id='basic-navbar-nav'>
          <Nav>{linksFormatted}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
