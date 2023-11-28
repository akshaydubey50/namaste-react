import React, { useEffect, useState } from "react";
import { CDN_URL } from "../../utils/constant";

import ShimmerEffect from "./ShimmerEffect";

import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../../utils/useRestaurantMenu";
import MenuItemList from "./MenuItemList";
import RestaurantCategory from "./RestaurantCategory";
export default function RestaurantMenu() {
  const { resId } = useParams();
  const { resMenuInfo, resInfo } = useRestaurantMenu(resId);
 

  return resMenuInfo == null ? (
    <ShimmerEffect />
  ) : (
    <>
      <div className="py-5">
        <div className="text-center">
          <h1 className="text-2xl font-semibold my-5">{resInfo.name}</h1>
          <p className="my-5 font-semibold text-lg">
            {resInfo.cuisines.join(", ")} - {resInfo.costForTwoMessage}
          </p>
        </div>
        {resMenuInfo.map((item,index)=>{
          return <RestaurantCategory key={index} data={...item} />;
        })}
      </div>
    </>
  );
}
