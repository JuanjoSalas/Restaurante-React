import React from "react";
import logo from "../../assets/img/logo.png"
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <img className="img" src={logo}/>
      <nav>
        <span className="nav"><Link to="/">Inicio</Link> </span>
        <span className="nav"><Link to="/Reserve">Reserva</Link> </span>
        <span className="nav"><Link to="/Menu">Menu</Link> </span>
      </nav>
    </div>
  );
};

export default Header;