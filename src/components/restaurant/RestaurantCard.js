import React, { useContext } from "react";
import { CDN_URL } from "../../utils/constant";
import StarIcon from "./StarIcon";
import UserContext from "../../utils/UserContext";

export default function xRestaurantCard({ resData }) {
  const { loggedUser } = useContext(UserContext);
  return (
    <div className="flex flex-col w-[300px] cursor-pointer rounded-[20px] hover:scale-90 hover:ease-in hover:duration-300"
    data-testid="resCard">
      <div className="restaurant-image">
        {/* Restaurant Img */}
        <img src={CDN_URL + resData.info.cloudinaryImageId} alt="food-image" className="object-cover" />
      </div>
      <div className=" p-2 ">
        <h3 className="font-medium">{resData.info.name}</h3>
        <h4>
          <span>{resData.info.cuisines.join(", ")}</span>
        </h4>
        <h4>{resData.info.costForTwo}</h4>
        <div className="time-rating-wrapper">
          <h5>{resData.info.avgRating} stars</h5>
          <h5>{resData.info.sla.deliveryTime} Min</h5>
        </div>
          <h5 className="font-medium py-2">User: {loggedUser}</h5>
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
