import React, { useEffect, useState } from "react";
import RestaurantCard from "./restaurant/RestaurantCard";
import ShimmerEffect from "./restaurant/ShimmerEffect";
import { Link } from "react-router-dom";

export default function BodyLayout() {
  const [listRestaurant, setLisRestaurant] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurantList();
  }, []);

  const getRestaurantList = async () => {
    const fetchData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.978302&lng=77.6408174&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const jsonData = await fetchData.json();

    setLisRestaurant(
      jsonData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilterRestaurant(
      jsonData.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const filterTopRestaurant = () => {
    const filterlist = listRestaurant.filter(
      (item) => item.info.avgRating >= 4
    );
    console.log(filterlist);
    setLisRestaurant(filterlist);
  };

  const filterSearchRestaurant = () => {
    const filterData = listRestaurant.filter((item) => {
      return item.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    console.log(filterData);
    setFilterRestaurant(filterData);
  };

  return listRestaurant.length === 0 ? (
    <ShimmerEffect />
  ) : (
    <div className="">
      <div className="flex justify-center">
        <div className="m-4 p-4 flex w-84 gap-6 ">
          <input
            type="text"
            className="rounded-md  border-black border-2 p-1"
            value={searchText}
            id="restaurant-search"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={filterSearchRestaurant}
            className="bg-green-100 px-4 py-2 rounded text-black font-medium "
          >
            Search
          </button>
          <button
            onClick={filterTopRestaurant}
            className="bg-gray-200 px-4 py-2 rounded text-black font-medium"
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <section className="w-fit grid grid-cols-4 gap-8 place-content-center mx-auto">
        {filterRestaurant.map((item) => {
          return (
            <Link key={item?.info?.id} to={"/restaurant/" + item?.info?.id}>
              <RestaurantCard resData={item} />
            </Link>
          );
        })}
      </section>
    </div>
  );
}
