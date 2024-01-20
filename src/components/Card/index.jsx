import React from "react"
import { ShoppingCartContext } from "../../context"
import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid'

function Card ({ data }) {
    const {
        shoppingCount,
        setShoppingCount,
        ProductDetail,
        setProductInfo,
        cartProducts,
        setCartProducts,
        CheckoutSideMenu,
    } = React.useContext(ShoppingCartContext)

    function showProductDetail (productDetail) {
        ProductDetail.setOpen()
        setProductInfo(productDetail)
        CheckoutSideMenu.setClose()
    }

    function addProductToCart (event, productData) {
        event.stopPropagation() // Prevent the event from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.
        ProductDetail.setClose()
        setShoppingCount(shoppingCount + 1)
        setCartProducts([...cartProducts, productData])
        CheckoutSideMenu.setOpen()
    }

    function renderIcon (id) {
        const isProductInCart = cartProducts.some(product => product.id === id)
        if (isProductInCart) {
            return (
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full p-1 m-2 border border-black bg-green-200"
                    onClick={(event) => event.stopPropagation()}
                >
                    <CheckIcon className="w-4 h-4 text-black" />
                </div>
            )
        } else {
            return (
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full p-1 m-2 border border-black"
                    onClick={(event) => addProductToCart(event, data)}
                >
                    <PlusIcon className="w-4 h-4 text-black" />
                </div>
            )
        }
    }

    return (
        <div 
            className="bg-white cursor-pointer w-56 h-60 rounded-lg"
            onClick={() => showProductDetail(data)}
        >
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.category.name}</span>
                <img className="w-full h-full object-cover rounded-lg" src={data.images?.[0]} alt=""/>
                {renderIcon(data.id)}
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light">{data.title}</span>
                <span className="text-lg font-medium">${data.price}</span>
            </p>
        </div>
    )
}

export { Card };
