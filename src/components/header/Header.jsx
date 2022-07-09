import React from "react";

import { category } from "../../api/pagesDb";
import { Link } from "react-router-dom";

import logo from "../../assets/tmovie.png";
import "./header.scss";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="Logo Movies" />
          </Link>
          <h3>BamMovies</h3>
        </div>
        <div className="header__nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to={`/${category.trending}`}>Trendings</Link>
            </li>
            <li>
              <Link to={`/${category.movie}`}>Movies</Link>
            </li>
            <li>
              <Link to={`/${category.tv}`}>Tvs</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
