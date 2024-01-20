import { createContext, useState } from "react";

const ShoppingCartContext = createContext();

function ShoppingCartProvider({ children }) {
    // State to keep track of the shopping cart count
    const [shoppingCount, setShoppingCount] = useState(0)
    // State to keep track of the product detail modal
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)

    const ProductDetail = {
        setOpen: () => setIsProductDetailOpen(true),
        setClose: () => setIsProductDetailOpen(false),
    }

    // State to keep track of the product detail modal
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)

    const CheckoutSideMenu = {
        setOpen: () => setIsCheckoutSideMenuOpen(true),
        setClose: () => setIsCheckoutSideMenuOpen(false),
    }

    // State to keep track of the product info
    const [productInfo, setProductInfo] = useState({})

    // State to keep track of the products added to the cart
    const [cartProducts, setCartProducts] = useState([])

    // State to keep track of the order
    const [order, setOrder] = useState([])

    return (
        <ShoppingCartContext.Provider
            value={{
                shoppingCount,
                setShoppingCount,
                ProductDetail,
                isProductDetailOpen,
                productInfo,
                setProductInfo,
                cartProducts,
                setCartProducts,
                isCheckoutSideMenuOpen,
                CheckoutSideMenu,
                order,
                setOrder,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartContext, ShoppingCartProvider }