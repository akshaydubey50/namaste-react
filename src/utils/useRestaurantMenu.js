import { useState, useEffect } from "react";
import { RESTAURANT_MENU_LIST_URL } from "./constant";

export function useRestaurantMenu(resId){
  const [resInfo, setResInfo] = useState(null);
  const [resMenuInfo, setResMenuInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const fetchData = await fetch(RESTAURANT_MENU_LIST_URL + resId);
    const resData = await fetchData.json();
  console.log(
    "Cards Data",
    resData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6].card
      ?.card?.itemCards,
    "Page Data",
    resData?.data?.cards[0]?.card?.card?.info
  );


    setResMenuInfo(
      resData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[6].card
        ?.card?.itemCards
    );
    // setResInfo(resData?.data?.cards[0]?.card?.card?.info);
  };

  return { resMenuInfo };
};
