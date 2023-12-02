import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CDN_URL } from '../utils/constant'
import VegIcon from './restaurant/VegIcon'
import NonVegIcon from './restaurant/NonVegIcon'
import { clearItems } from '../utils/cartSlice'

export default function Cart() {
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems)

    const dispatch = useDispatch();

    const clearCartHandle = () => {
        dispatch(clearItems())
    }
    return (
        <div className='py-5'>
            <div className="flex justify-between w-1/2 mx-auto px-2  ">
                <h5 className=' font-medium text-2xl'>My Order</h5>
                <button
                    onClick={clearCartHandle}
                    className='bg-red-600 text-white rounded-md px-3 py-2 font-medium'>Clear Cart</button>
            </div>
            <div className="flex gap-6 flex-col px-4 my-2 rounded-lg bg-gray-100 w-1/2 mx-auto">
                {cartItems.map((item, index) => (
                    <div
                        key={item.card?.info.id}
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
                        <div className="">
                            <img
                                src={CDN_URL + item.card.info.imageId}
                                alt="test img"
                                className="w-[150px] h-[120px] rounded-2xl object-cover"
                            />
                        </div>
                    </div>
                ))}
            </div>
            {cartItems.length === 0 && <h1 className='text-center font-medium text-xl'>Cart is empty, Add item to the cart!</h1>}

        </div>
    )
}
