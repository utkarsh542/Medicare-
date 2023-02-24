import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="homeLeft">
        <div className="homeLeftDetails">
        <h2>Welcome to MediCare+ Clinic</h2>
        <h1 className="homeLeftBest">Best Specialists</h1>
        <p className="homeLeftDesc">
          We are on the leading edge of cancer care.Provide the full continnum
          of cancer treatment and supportive care and services in a single
          convenient location.
        </p>
      </div>
      <div className="homeLeftButton">
        <button className="homeLeftbuttonappoint">Make an appointment</button>
        <button className="homeLeftButtondepart">Department</button>
      </div>
      </div>
      <div className="homeRight"></div>
    </div>
  );
};

export default Home;
