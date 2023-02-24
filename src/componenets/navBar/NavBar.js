import React from "react";
import "./navBar.css";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navParts">
        <div className="leftBar">
          <span className="leftBarMedi">Medi</span>
          <span className="leftBarcare">Care+</span>
        </div>
        <div className="centerBar">
          <ul className="centerBarList">
            <li className="centerBarTitle">Home</li>
            <li className="centerBarTitle">About</li>
            <li className="centerBarTitle">Service</li>
            <li className="centerBarTitle">News</li>
          </ul>
        </div>
        <div className="rightBar">
          <button className="rightButton">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
