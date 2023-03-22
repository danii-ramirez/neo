import React from "react";
import { NavLink } from "react-router-dom";
import { CartWidget } from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink to={"/"}>Neo</NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to={"/productos"}>Productos</NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Celulares
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Cargadores
              </a>
            </li>
          </ul>
          <span className="navbar-text">
            <CartWidget />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
