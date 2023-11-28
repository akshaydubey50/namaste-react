import React from "react";
import { CDN_URL } from "../../utils/constant";
import StarIcon from "./StarIcon";

export default function RestaurantCard(props) {
  const { resData } = props;
  return (
    <div className="flex flex-col w-[300px] cursor-pointer rounded-[20px] hover:scale-90 hover:ease-in hover:duration-300">
      <div className="restaurant-image">
        {/* Restaurant Img */}
        <img src={CDN_URL + resData.info.cloudinaryImageId} alt="food-image" />
      </div>
      <div className=" p-2 ">
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

// HOC

// export function WithPromoteLabelCards(RestaurantCard) {
//   return () => {
//     return (
//       <>
//         <label>Label</label>
//         <RestaurantCard />
//       </>
//     );
//   };
// }
