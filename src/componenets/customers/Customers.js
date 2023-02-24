import React from "react";
import "./customers.css";

const Customers = () => {
  return (
    <div className="customers">
      <h1 className="customersTitle">What Our Customers Say</h1>
      <div className="customerDescMain">
      <div className="customersDes">
        <div className="customerQuotes">
          <i class="customersQuote fa-solid fa-quote-left"></i>
        </div>
        <div className="customerDetails">
          <p className="customerDetailsDesc">
            I wanted to thanks everyone at this facility for the quality of care
            and compassion they showed during my stay.
          </p>
          <div className="customerProfile">
            <img src="./image/profile1.webp" alt="" />
            <div className="customerProfileName">
              <h2>Jacqueline Asong</h2>
              <p>Patient</p>
            </div>
          </div>
        </div>
      </div>
      <div className="customersDes">
        <div className="customerQuotes">
          <i class="customersQuote fa-solid fa-quote-left"></i>
        </div>
        <div className="customerDetails">
          <p className="customerDetailsDesc">
            I wanted to thanks everyone at this facility for the quality of care
            and compassion they showed during my stay.
          </p>
          <div className="customerProfile">
            <img src="./image/profile2.jfif" alt="" />
            <div className="customerProfileName">
              <h2>Patricia Ribeiro</h2>
              <p>Patient</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Customers;
