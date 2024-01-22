import React from "react"
import { Link } from "react-router-dom"
import { XMarkIcon } from '@heroicons/react/24/solid'

import './CheckOutSideMenu.css'
import { OrderCard } from "../OrderCard"
import { totalPrice } from "../../utils"
import { ShoppingCartContext } from "../../context"

function CheckOutSideMenu() {
    const {
            isCheckoutSideMenuOpen,
            cartProducts,
            CheckoutSideMenu,
            setCartProducts,
            order,
            setOrder,
            setShoppingCount,
            shoppingCount,
            setSearchedItemByTitle,
        } = React.useContext(ShoppingCartContext)

    function handleDelete (id) {
        const newCartProducts = cartProducts.filter(product => product.id !== id)
        setCartProducts(newCartProducts)
        setShoppingCount(shoppingCount - 1)
    }

    function handleCheckout () {
        const orderToAdd = {
            date: new Date(),
            products: cartProducts,
            totalProducts: cartProducts.length,
            totalPrice: totalPrice(cartProducts),
        }
        setOrder([...order, orderToAdd])
        setCartProducts([])
        setShoppingCount(0)
        CheckoutSideMenu.setClose()
        setSearchedItemByTitle(null)
    }

    return (
        <aside 
            className={`${isCheckoutSideMenuOpen ? 'flex': 'hidden'} checkout-side-menu  flex-col fixed right-2 border border-black rounded-lg bg-white`}
        >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div>
                    <XMarkIcon 
                        className='w-6 h-6 text-black cursor-pointer'
                        onClick={() => CheckoutSideMenu.setClose()}
                    />
                </div>
            </div>
            <div className="px-6 overflow-y-scroll flex-1">
                {
                    cartProducts.map(product => (
                        <OrderCard
                            id={product.id}
                            key={product.id}
                            title={product.title}
                            imageUrl={product.images?.[0]}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className="px-6">
                <p className="flex justify-between items-center px-6 mb-2">
                    <span className="font-light text-xl">Total:</span>
                    <span className="font-medium text-2xl">${totalPrice(cartProducts)}</span>
                </p>
                <div className="flex justify-center items-center mb-5">
                    <Link to='/my-orders/last'>
                        <button 
                            className="bg-black text-white rounded-lg px-6 py-2 w-full"
                            onClick={() => handleCheckout()}
                        >
                                Checkout
                        </button>
                    </Link>
                </div>
            </div>
        </aside>
    )
}

export { CheckOutSideMenu }