import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../images/globe_logo.svg';
import hamburgerIcon from '../../images/hamburger_menu.svg';

const Header = ({ onClickSignUp, onClickSignIn }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && isNavOpen) {
        closeNav();
      }
    };

    if (isNavOpen) {
      window.addEventListener('click', handleClickOutside);
    }

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isNavOpen]);

  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
      <div ref={menuRef} className={`header__nav ${isNavOpen ? 'nav-show' : ''}`}>
        <img
          src={hamburgerIcon}
          alt="hamburger menu"
          className="hamburger-menu"
          onClick={toggleNav}
        />
        <Link to="/" className="nav__button">
          Home
        </Link>
        <Link to="/about" className="nav__button">
          About
        </Link>
        <button className="nav__button" onClick={onClickSignIn}>
          Log In
        </button>
      </div>
      <button className="signUp__button" onClick={onClickSignUp}>
        Sign Up
      </button>
    </header>
  );
};

export default Header;