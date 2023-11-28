import React, { useEffect, useState } from "react";
import { CDN_URL } from "../../utils/constant";

import ShimmerEffect from "./ShimmerEffect";
import VegIcon from "./VegIcon";
import NonVegIcon from "./NonVegIcon";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../../utils/useRestaurantMenu";
export default function RestaurantMenu() {
    const { resId } = useParams();
    const {resMenuInfo }=    useRestaurantMenu(resId)

    return resMenuInfo == null ? (
      <ShimmerEffect />
    ) : (
      <>
        <div class="py-5">
          <div className="menu-detail">
            {/* <h1>{resInfo.name}</h1> */}
            <p>
              {/* {resInfo.cuisines.join(", ")} - {resInfo.costForTwoMessage} */}
            </p>
          </div>
          <section class="grid grid-cols-1 gap-4 w-fit mx-auto ">
            {resMenuInfo.map((item) => {
              return (
                <div className="bg-slate-100 flex gap-6 cursor-pointer shadow-xl rounded-lg p-4 justify-between items-center" key={item.card.info.id}>
                  <div className="">
                    {item?.card?.info?.itemAttribute?.vegClassifier == "VEG" ? (
                      <VegIcon />
                    ) : (
                      <NonVegIcon />
                    )}
                    <h3>{item.card.info.name}</h3>
                    <p>
                      <span>&#8377;</span>
                      {parseInt(item.card.info.price) / 100}
                    </p>

                    <p class="res-description">
                      {item.card.info.description?.slice(0, 80).concat("...")}
                    </p>
                  </div>
                  <img
                    src={CDN_URL + item.card.info.imageId}
                    alt="test img"
                    className="w-[150px] rounded-2xl"
                  />
                </div>
              );
            })}
          </section>
        </div>
      </>
    );
}