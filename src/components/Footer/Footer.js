import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer1">
          <h2 className="footer-header">Contact Us</h2>
          <ul className="footer-details">
          <li>
            <div className="footer-mail-contact-details">
              <div className="footer-mail-text">E-mail:</div>
              <a href="mailto:info@fountaincloudtech.com" className="footer-mail-contact-p">info@fountaincloudtech.com</a>
            </div>
          </li>
          </ul>
          <ul className="footer-details">
            <li>
                <div className="footer-mail-contact-details">
                        <div className="footer-contact-text">Phone:</div>
                        <a href="tel:8885777505" className="footer-mail-contact-p">+91 88857 77505</a>
                </div>
            </li>
          </ul>
          
          <ul className="footer-list">
            <li>Office Address:</li>
            <li className="footer-lists">5-648,15th cross,5th Road</li>
            <li className="footer-lists">Georgepet,Anantapur</li>
            <li className="footer-lists">Andhra Pradesh-515001</li>
          </ul>
        </div>
        <div className="footer1">
          <h1 className="footer-header">Services</h1>
          <ul className="footer-links">
            <Link to="/services"><li>Implementation</li></Link>
            <Link to="/services"><li>Customization</li></Link>
            <Link to="/services"><li>Integration</li></Link>
            <Link to="/services"><li>Support</li></Link>
          </ul>
        </div>
        <div className="footer1">
          <h1 className="footer-header">Quick Links</h1>
          <ul className="footer-links">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about-us">
              <li>About us</li>
            </Link>
            <Link to="/services">
              <li>Services</li>
            </Link>
            <Link to="/contact-us">
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
