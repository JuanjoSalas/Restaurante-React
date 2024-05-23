import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <span>Header</span>
      <nav>
        <span><Link to="/">Home</Link> </span>
        <span><Link to="/Reserve">Reserve</Link> </span>
        <span><Link to="/Menu">Menu</Link> </span>
      </nav>
    </div>
  );
};

export default Header;