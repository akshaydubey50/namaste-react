import React from "react";
import VegIcon from "./VegIcon";
import NonVegIcon from "./NonVegIcon";
import { CDN_URL } from "../../utils/constant";
import { useDispatch } from "react-redux";
import { addItems } from "../../utils/cartSlice";

export default function MenuItemList({ menuListData }) {
  // Destructure menuListData from props
  console.log("menuListData:-", menuListData);

  const dispatch=useDispatch();

  const handlerAddItem =(item)=>{
    dispatch(addItems(item))
  }

  return (
    <div className="flex gap-6 flex-col px-4 my-2 rounded-lg bg-gray-100 ">
      {menuListData.map((item, index) => (
        <div
          key={item.card?.info.id}
          data-testid="foodItems"
          className="flex gap-6 items-center justify-between border-b py-4  border-gray-200"
        >
          <div className="">
            {item.card?.info?.itemAttribute?.vegClassifier === "VEG" ? (
              <VegIcon />
            ) : (
              <NonVegIcon />
            )}
            <h3>{item.card?.info.name}</h3>
            <p>
              <span>&#8377;</span>
              {parseInt(item.card.info.price) / 100}
            </p>
            <p className="res-description">
              {item.card.info.description?.slice(0, 80).concat("...")}
            </p>
          </div>
         <div className="relative">
            <button className="bg-black py-2 px-3 cursor-pointer rounded-md text-white font-semibold absolute left-16" 
            onClick={()=>handlerAddItem(item)}
            >Add +</button>
            <img
              src={CDN_URL + item.card.info.imageId}
              alt="test img"
              className="w-[200px] h-[150px] rounded-2xl object-cover"
            />
         </div>
        </div>
      ))}
    </div>
  );
}
