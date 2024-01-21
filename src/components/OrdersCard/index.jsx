import React from "react"
import { ShoppingCartContext } from "../../context"
import { ChevronRightIcon, CalendarIcon, ShoppingBagIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'

function OrdersCard(props) {
    const {
        date,
        totalPrice,
        totalProducts
    } = props

    return (
        <div className="flex justify-between items-center relative mb-2 border border-black rounded-lg w-96 h-18 p-3 shadow-lg">
            <p className="flex flex-col justify-center mr-6">
                <div className="flex items-center">
                    <CalendarIcon className="w-5 h-5 text-black cursor-pointer" />
                    <span className="text-md font-bold ml-2">{date}</span>
                </div>
                <div className="flex items-center">
                    <ShoppingBagIcon className="w-5 h-5 text-black cursor-pointer" />
                    <span className="text-md ml-2">Products: {totalProducts}</span>
                </div>
            </p>
            <p className="flex items-center">
                <CurrencyDollarIcon className="w-5 h-5 text-black cursor-pointer" />
                <span className=" text-lg font-bold">{totalPrice}</span>
                <ChevronRightIcon className="w-6 h-6 text-black cursor-pointer" />
            </p>
        </div>
    )
}

export { OrdersCard }