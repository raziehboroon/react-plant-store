//www.flaticon.com/free-icon/cactus_4842199

/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */

import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import logo from "../../logos/cactusBlack.svg";
import { useGlobalContext } from "../../Context";

const Navbar = () => {
  const { itemInBasket } = useGlobalContext();
  return (
    <nav className="navbar navbar-dark navbar-expand-lg p-0 m-0">
      <div className="container align-items-center">
        <Link to="/">
          <img src={logo} alt="cactus logo" className="logo navbar-brand" />
        </Link>
        <ul className="navbar-nav ml-5 flex-grow-1">
          <li className="nav-item fw-bold nav-title">
            <Link to="/" className="nav-link text-white fs-4 fw-bold">
              Plants
            </Link>
          </li>
        </ul>
        <Link to="/Cart" className="ml-auto">
          <button
            id="btn-nav"
            className="btn fw-bold text-capitalize p-1 border border-3 rounded text-light"
          >
            <i className="fas fa-shopping-cart p-1"></i>
            my cart
            <span
              id="basket-index"
              className="d-flex align-items-center justify-content-center p-0"
            >
              {itemInBasket}
            </span>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
