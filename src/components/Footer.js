import React from "react";
import logo from"../assets/logo-footer.png";
import"../style/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter ,faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return(
        <footer >
        <article className="article-layer">
        <img className="footer-img" src={logo} alt="Logo" />

        <nav className="footer-nav">
      <ul>
        <li><a className="footer-a" href="/">Home</a></li>
        <li><a className="footer-a" href="/about">About</a></li>
        <li><a className="footer-a" href="/menu">Menu</a></li>
        <li><a className="footer-a" href="/reservation" >Reservation</a></li>
        <li><a className="footer-a" href="/order">Order Online</a></li>
        {/* <li><a className="footer-a" href="/login">Login</a></li> */}
      </ul>

        </nav>
        <nav>
      <ul>
        <li><a className="footer-a" href="#"> <FontAwesomeIcon icon={faPhone} className="icon-nav"  /> +27 21 480 0431</a></li>
        <li><a className="footer-a" href="#"><FontAwesomeIcon icon={faLocationDot} className="icon-nav" /> Chicago-34 Bree Street </a></li>
        <li><a className="footer-a" href="#"> <FontAwesomeIcon icon={faEnvelope} className="icon-nav" /> info@Little-Lemon.com</a></li>

      </ul>

        </nav>
        <nav>
      <ul>
        <li><a className="footer-a" href="#"><FontAwesomeIcon icon={faTwitter} className="icon-nav" />Twitter</a></li>
        <li><a className="footer-a" href="#"><FontAwesomeIcon icon={faFacebook} className="icon-nav" /> Facebook</a></li>
      </ul>

        </nav>
        </article>
        {/* <p className="p-footer">&copy; 2023 Little Lemon</p>  */}
        </footer>

    );
}
export default Footer;