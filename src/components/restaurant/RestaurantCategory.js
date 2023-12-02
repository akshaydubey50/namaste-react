import React, { useState } from 'react'
import MenuItemList from './MenuItemList';

export default function RestaurantCategory({ data, showItem, setShowIndex }) {

    const handleMenuList = () => {
        setShowIndex()
    }
    const { title, itemCards } = data?.card?.card

    return (
        <div className="w-1/2 mx-auto grid grid-cols-1 my-2">
            <div
                className="bg-slate-100 rounded-lg"
            >
                <div className="flex gap-6 cursor-pointer  rounded-lg p-4 justify-between items-center"
                    onClick={handleMenuList}
                >
                    <span className="font-semibold text-lg">{`${title} (${itemCards.length})`}</span>
                    <span className="material-symbols-outlined">
                            expand_more
                        </span>
                    
                </div>
            </div>
            {showItem && <MenuItemList menuListData={...itemCards} />}
        </div>
    )
}
