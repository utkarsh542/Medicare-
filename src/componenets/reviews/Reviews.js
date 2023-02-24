import axios from "axios";
import './reviews.css'
import React, { useEffect, useState } from "react";

const Reviews = () => {
  const [reviewsData, setReviewsData] = useState([]);
  useEffect(() => {
    axios
      .get("https://admin.tomedes.com/api/v1/get-reviews?page=1")
      .then((res) => {
        setReviewsData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="reviews">
      <h1 className="reviewsTitle">Reviews</h1>
      <div className="reviewsMain">
        {reviewsData.map((d) => {
          return (
            <div key={d.ID}>
            <div className="reviewMainDes"  >
              <h5 className="reviewMainDesDetails">Name: {d.Name}</h5>
              <p className="reviewMainDesDetailsR" >Rating: {d.rating}</p>
              <p className="reviewMainDesDetailsR">Review: {d.Reviews}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
