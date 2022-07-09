import React from "react";
import "./footer.scss";

import logo from "../../assets/tmovie.png";
import footer_bg from "../../assets/footer-bg.jpg";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${footer_bg})` }}>
      <div className="logo">
        <img src={logo} alt="" />
        <h3>BamMovies</h3>
      </div>
      <div className="menu-footer">
        <ul className="list">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/">
            <li>Contact us</li>
          </Link>
          <Link to="/">
            <li>Term of services</li>
          </Link>
          <Link to="/">
            <li>About us</li>
          </Link>
        </ul>

        <ul className="list">
          <Link to="/">
            <li>Live</li>
          </Link>
          <Link to="/">
            <li>FAQ</li>
          </Link>
          <Link to="/">
            <li>Premium</li>
          </Link>
          <Link to="/">
            <li>Privacy policy</li>
          </Link>
        </ul>

        <ul className="list">
          <Link to="/">
            <li>You must watch</li>
          </Link>
          <Link to="/">
            <li>Recent release</li>
          </Link>
          <Link to="/">
            <li>Top IMDB</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
