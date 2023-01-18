import React from "react";
import { Link } from "react-router-dom";
import './Header.scss';
import Logo from '../../images/logo.png';
import menu from "../../images/icon-menu.png";
import close from "../../images/icon-close.png";


const Header = () => {

  const onToggleclick = () => {
    const hamburger = document.querySelector('.hamburger');
    const navLink = document.querySelector('.nav__link');
    if (hamburger && navLink) {

      navLink.classList.toggle('hide');
      if (hamburger.classList.contains('expanded')) {
        hamburger.classList.remove('expanded');
      } else {
        hamburger.classList.add('expanded');
      }
    }
  }
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src={Logo} alt="Logo" />
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
          <Link to="/">Home</Link>
          <Link to="/about-us">About us</Link>
          <Link to="/it-staffing">It Staffing</Link>
          <Link to="/contact-us">Contact us</Link>
        </div>
      </nav>
    </header>

  );
};

export default Header;
// const Header = () => {

//   const onToggleclick = () => {
//     const hamburger = document.querySelector('.hamburger');
//     const navLink = document.querySelector('.nav__link');
//     if (hamburger && navLink) {

//       navLink.classList.toggle('hide');
//       if (hamburger.classList.contains('expanded')) {
//         hamburger.classList.remove('expanded');
//       } else {
//         hamburger.classList.add('expanded');
//       }
//     }
//   }
//   return (
//     <header>
//       <nav className="navbar">
//         <Link to="/" className="logo">
//           <img src={Logo} alt="Logo" />
//         </Link>

//         <div className="hamburger" onClick={onToggleclick}>
//           <div className="menu">
//             <img src={menu} className="menu" alt="hamburger" />
//           </div>
//           <div className="close">
//             <img src={close} className="close" alt="close" />
//           </div>
//         </div>

//         <div className="nav__link ">
//           <a href="#">Home</a>
//           <a href="#">About Us</a>
//           <a href="#">It Staffing</a>
//           <a href="#">Contact Us</a>
//         </div>
//       </nav>
//     </header>

//   );
// };

// export default Header;