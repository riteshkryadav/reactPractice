import React from "react";
import "../App.css";
// import { Button } from "react-bootstrap";
import { NavLink as Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="containerStyle">
        <Link className="navbarLink" to="/">
          Navbar
        </Link>
        <Link className="navbarLink" to="/Hero">
          hero
        </Link>
        <Link className="navbarLink" to="/useEffect">
          useEffect
        </Link>
        <Link className="navbarLink" to="/useState">
          useState
        </Link>
      </div>
    </>
  );
};

export default Navbar;
