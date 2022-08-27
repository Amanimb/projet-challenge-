import React from "react";
import "../style/Navbar.css";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <Link to="/">
          <li>Acceuil</li>
        </Link>
        <Link to="/About">
          <li>À propos</li>
        </Link>
        <Link to="/Product">
          <li>Magasin</li>
        </Link>
      </ul>
      <img src="/benzide_BPS.png" alt="logo" />
      <Link to="/Contact">
        <h4 className="cc">Contact</h4>
      </Link>
    </div>
  );
}

export default Navbar;
