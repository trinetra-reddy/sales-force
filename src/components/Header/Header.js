import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import menu from "../../images/icon-menu.png";
import close from "../../images/icon-close.png";

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
  };
  return (
    <header>
      <nav className="navbar">
        {/* <Link to="/" className="logo">
          <img src={Logo} alt="Logo" />
        </Link> */}
        <div className="fountain-logo">Fountain Cloud Tech</div>
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
          <Link to="/about-us" activeclassname="active">About us</Link>
          <Link to="/services" activeclassname="active">Services</Link>
          <Link to="/contact-us" activeclassname="active">Contact us</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
