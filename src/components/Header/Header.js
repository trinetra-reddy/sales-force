import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import menu from "../../images/icon-menu.png";
import close from "../../images/icon-close.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  const onToggleclick = () => {
    const hamburger = document.querySelector(".hamburger");
    const navLink = document.querySelector(".nav__link");
    if (hamburger && navLink) {
      navLink.classList.toggle("hide");
      if (hamburger.classList.contains("expanded")) {
        hamburger.classList.remove("expanded");
      } else {
        hamburger.classList.add("expanded");
      }
    }
  }
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="logo">
          <div className="fountain-logo">Fountain Cloud Tech</div>
        </Link>
        <div className="hamburger" onClick={onToggleclick}>
          <div className="menu">
            <img src={menu} className="menu" alt="hamburger" />
          </div>
          <div className="close">
            <img src={close} className="close" alt="close" />
          </div>
        </div>

        <div className="nav__link hide">
          <Link to="/" activeclassname="active">Home</Link>
          <NavLink to="/about-us" activeclassname="active">About us</NavLink>
          <NavLink to="/services" activeclassname="active">Services</NavLink>
          <NavLink to="/contact-us" activeclassname="active">Contact us</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
