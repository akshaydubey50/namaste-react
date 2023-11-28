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
      resData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR
    );

    const itemCategory =
      resData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((item)=>
        item?.card?.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
      console.log("itemCategory:::", itemCategory);

      setResMenuInfo(itemCategory);
      console.log(resMenuInfo)
      setResInfo(resData?.data?.cards[0]?.card?.card?.info);
    };
    useEffect(() => {
      console.log("Updated resMenuInfo:", resMenuInfo);
    }, [resMenuInfo]);

  return { resMenuInfo, resInfo };
};
