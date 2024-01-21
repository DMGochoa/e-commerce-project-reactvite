import { createContext, useState, useEffect } from "react";

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

    // State to keep track of the items and calling the API
    const [items, setItems] = useState(null)
    const [filteredItems, setFilteredItems] = useState(null)

    // Search items by title
    const [searchedItemByTitle, setSearchedItemByTitle] = useState('')

    // Searched category
    const [searchedCategory, setSearchedCategory] = useState('')

    // Se podria usar react query para esto
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => {
                try {
                    console.log(data.images)
                    for (let i = 0; i < data.length; i++) {
                        data[i].images = data[i].images.map((image) => 
                            image.replace('["', '').replace('"]', '')
                        )
                    }
                    setItems(data)
                } catch (error){
                    console.log('error')
                }
            })
            .catch(err => console.error(err));
    }, [])

    function filterItemsBy(items, searchedItem, by) {
        return items?.filter(
            (item) => item[by]?.toLowerCase().includes(
                searchedItem.toLowerCase()
            )
        )
    }

    function filterItemsByCategory(items, searchedCategory,) {
        return items?.filter(
            (item) => item.category.name.toLowerCase().includes(
                searchedCategory.toLowerCase()
            )
        )
    }

    useEffect(() => {
        if (searchedCategory && searchedItemByTitle) {
            setFilteredItems(
                filterItemsBy(
                    filterItemsByCategory(
                        items,
                        searchedCategory,
                        "category"),
                    searchedItemByTitle,
                    "title"
                )
            )
        } else if (searchedCategory !== '') {
            setFilteredItems(
                filterItemsByCategory(
                    items,
                    searchedCategory
                )
            )
        } else if (searchedItemByTitle) {
            setFilteredItems(
                filterItemsBy(
                    items,
                    searchedItemByTitle),
                    "title"
                )
        }
    }, [items, searchedItemByTitle, searchedCategory])


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
                items,
                searchedItemByTitle, 
                setSearchedItemByTitle,
                filteredItems,
                setSearchedCategory,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}

export { ShoppingCartContext, ShoppingCartProvider }