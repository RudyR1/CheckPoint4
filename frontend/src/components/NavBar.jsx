import React from "react";
import { Link } from "react-router-dom";
// import App from "../App";

function Navbar() {
  return (
    <div className="navbar">
      <div>
        <Link to="/">
          <h1>My Books Library</h1>
        </Link>
      </div>
      <div>
        <Link to="/favorites">
          <h3>Mes livres favoris</h3>
        </Link>
      </div>
      <div>
        <Link to="/login">
          <h3>Dashboard</h3>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
