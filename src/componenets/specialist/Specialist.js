import React from "react";
import "./specialist.css";

const Specialist = () => {
  return (
    <div className="specialist">
      <div className="specialistTop">
        <h1 className="specialistTopTitle">We Have The Best Specialist</h1>
        <p className="specialistTopDesc">
          We have a wide experience in design and strategy with the
          locally-rooted knowledge
        </p>
      </div>
      <div className="specialistBottom">
        <div className="specialistBottomCard">
          <div className="specialistBottomCardImage"></div>
          <div className="specialistBottonCardTitle">
            <h2>Dr. Awaatif Al</h2>
            <p>Dental Care</p>
          </div>
        </div>
        <div className="specialistBottomCard">
          <div className="specialistBottomCardImage"></div>
          <div className="specialistBottonCardTitle">
            <h2>Dr. Filipa Gaspar </h2>
            <p>Cardiology</p>
          </div>
        </div>
        <div className="specialistBottomCard">
          <div className="specialistBottomCardImage"></div>
          <div className="specialistBottonCardTitle">
            <h2>Dr.Shukhmeet Gorae</h2>
            <p>Neurological</p>
          </div>
        </div>
        <div className="specialistBottomCard">
          <div className="specialistBottomCardImage"></div>
          <div className="specialistBottonCardTitle">
            <h2>Dr. Siri JakoBsson</h2>
            <p>Prediatrics</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialist;
