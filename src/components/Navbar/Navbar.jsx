import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <button className="menu-button">
          <i className="fas fa-bars"></i>
        </button>
        <div className="logo">
          <i className="fas fa-play-circle"></i>
          <span>VidTube</span>
        </div>
      </div>
      <div className="navbar-center">
        <input
          type="text"
          className="search-bar"
          placeholder="Search"
        />
        <button className="search-button">
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="navbar-right">
        <button className="icon-button">
          <i className="fas fa-video"></i>
        </button>
        <button className="icon-button">
          <i className="fas fa-th"></i>
        </button>
        <button className="icon-button">
          <i className="fas fa-bell"></i>
        </button>
        <div className="profile">
          <img
            src="https://via.placeholder.com/30"
            alt="Profile"
            className="profile-pic"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;