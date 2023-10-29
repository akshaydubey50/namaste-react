import React from "react";
import { CDN_URL } from "../../utils/constant";

export default function RestaurantCard(props) {
  const { resData } = props;
  return (
    <div className="restaurant-card-container">
      <div className="restaurant-image">
        {/* Restaurant Img */}
        <img src={CDN_URL + resData.info.cloudinaryImageId} alt="food-image" />
      </div>
      <div className="restaurant-detail">
        <h3>{resData.info.name}</h3>
        <h4>
          <span>{resData.info.cuisines.join(", ")}</span>
        </h4>
        <h4>{resData.info.costForTwo}</h4>
        <div className="time-rating-wrapper">
          <h5>{resData.info.avgRating} stars</h5>
          <h5>{resData.info.sla.deliveryTime} Min</h5>
        </div>
      </div>
    </div>
  );
}
