import React, { useState } from 'react'
import MenuItemList from './MenuItemList';

export default function RestaurantCategory({ data, showItem, setShowIndex }) {

    const handleMenuList = () => {
        setShowIndex();
    }
    const { title, itemCards } = data?.card?.card
    console.log('data::::', title, itemCards)

    return (
        <div className="w-1/2 mx-auto grid grid-cols-1 my-2">
            <div
                className="bg-slate-100 rounded-lg"
            >
                <div className="flex gap-6 cursor-pointer  rounded-lg p-4 justify-between items-center"
                    onClick={handleMenuList}
                >
                    <h1 className="font-semibold text-lg">{`${title} (${itemCards.length})`}</h1>
                    <p>
                        <span class="material-symbols-outlined">
                            expand_more
                        </span>
                    </p>
                </div>
            </div>
            {showItem && <MenuItemList menuListData={...itemCards} />}
        </div>
    )
}
