import React from "react";
import "./innovation.css";

const Innovation = () => {
  return (
    <div className="innovation">
      <div className="innovationLeft">
        <h3 className="innovationLeftTitle">Clinic With Innovation</h3>
        <p className="innovationLeftDesc" >
          We provide the most full medical services,so every person could have
          the apportunity to receive qualitative medical help
        </p>
        <button className="innovationLeftButton">Learn more</button>
      </div>
      <div className="innovationRight">
        <div className="innovationRightTopBottom">
          <div className="innovationRightTop">
            <img src="./image/specialist.jpg" alt="" />
            <h3 className="innovationimgTitle">Qualified Doctor</h3>
          </div>
          <div className="innovationRightBottom">
            <img src="./image/ambulance.jfif" alt="" />
            <h3 className="innovationimgTitle">24 Hours Service</h3>
          </div>
        </div>
        <div className="innovationRightBox">
          <img src="./image/bordboy.jfif" alt="" />
          <h3 className="innovationimgTitle"> Emrgency Care</h3>
        </div>
      </div>
    </div>
  );
};

export default Innovation;
