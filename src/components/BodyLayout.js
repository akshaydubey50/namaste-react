import React, { useState } from "react";
import RestaurantCard from "./restaurant/RestaurantCard";
import { resObJ } from "../utils/mockData";

export default function BodyLayout() {
  const [listRestaurant, setLisRestaurant] = useState([...resObJ]);
  const filterTopRestaurant = () => {
    const filterlist = listRestaurant.filter((item) => item.info.avgRating >= 4.1);
    setLisRestaurant(filterlist);
  };
  return (
    <div className="">
      <div className="filter-btn" style={{ margin: "10px" }}>
        {/* <input type="text" /> */}
        <button onClick={filterTopRestaurant}>Top Rated Restaurant</button>
      </div>
      <section className="card-wrapper">
        {listRestaurant.map((item, index) => {
          return <RestaurantCard key={index} resData={item} />;
        })}
      </section>
    </div>
  );
}
