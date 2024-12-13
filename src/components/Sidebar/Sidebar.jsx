import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li className="menu-item active">
          <i className="fas fa-home"></i>Home
        </li>
        <li className="menu-item">
          <i className="fas fa-gamepad"></i>Gaming
        </li>
        <li className="menu-item">
          <i className="fas fa-car"></i>Automobiles
        </li>
        <li className="menu-item">
          <i className="fas fa-basketball-ball"></i>Sports
        </li>
        <li className="menu-item">
          <i className="fas fa-tv"></i>Entertainment
        </li>
        <li className="menu-item">
          <i className="fas fa-microchip"></i>Technology
        </li>
        <li className="menu-item">
          <i className="fas fa-music"></i>Music
        </li>
        <li className="menu-item">
          <i className="fas fa-blog"></i>Blogs
        </li>
        <li className="menu-item">
          <i className="fas fa-newspaper"></i>News
        </li>
      </ul>
      <hr className="divider" />
      <div className="subscriptions">
        <h3 className="subscriptions-title">SUBSCRIBED</h3>
        <ul className="subscriptions-list">
          <li className="subscription-item">
            <img src="https://via.placeholder.com/30" alt="PewDiePie" />
            PewDiePie
          </li>
          <li className="subscription-item">
            <img src="https://via.placeholder.com/30" alt="MrBeast" />
            MrBeast
          </li>
          <li className="subscription-item">
            <img src="https://via.placeholder.com/30" alt="Justin Bieber" />
            Justin Bieber
          </li>
          <li className="subscription-item">
            <img src="https://via.placeholder.com/30" alt="5-Minute Crafts" />
            5-Minute Crafts
          </li>
          <li className="subscription-item">
            <img src="https://via.placeholder.com/30" alt="Nas Daily" />
            Nas Daily
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
