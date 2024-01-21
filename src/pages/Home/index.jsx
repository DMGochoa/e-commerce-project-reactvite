import React from "react"
import { useEffect } from "react"
import { Layout } from "../../components/Layout"
import { Card } from "../../components/Card"
import { ProductDetail } from "../../components/ProductDetail"
import { ShoppingCartContext } from "../../context"

function Home() {
    const {
        items,
        filteredItems,
        setSearchedItemByTitle,
        searchedItemByTitle,
        setSearchedCategory,
    } = React.useContext(ShoppingCartContext)

    const categories = [
        'clothes',
        'electronics',
        'furnitures',
        'toys',
        'others'
    ]
    const currentPath = window.location.pathname
    const selectedCategory = currentPath.substring(
        currentPath.lastIndexOf('/') + 1
    )
    useEffect(() => {
        if (selectedCategory) {
            setSearchedCategory(selectedCategory)
        }
    }, [selectedCategory])

    function renderItems() {
        let itemsToRender
        if (searchedItemByTitle?.length > 0 || selectedCategory?.length > 0) {
            itemsToRender = filteredItems
        } else {
            itemsToRender = items
        }
        return itemsToRender?.map(
            item => (
            <Card key={item.id} data={item}/>
            )
        )
    }

    return (
        <Layout>
            <div className="flex w-80 items-center justify-center relative mb-6">
                <h1 className="font-medium text-xl">
                    {
                        `Exclusive Products${selectedCategory? ` - ${selectedCategory}` : ''}`
                    }
                </h1>
            </div>
            <input
                type="text"
                className="w-80 h-10 border-2 border-gray-300 rounded-md px-2 mb-6 focus:outline-none focus:border-black"
                placeholder="Search Products"
                onChange={(event) => setSearchedItemByTitle(event.target.value)}
            />
            <div className="grid gap-3 grid-cols-4 w-full max-w-screen-lg">
                { renderItems() }
            </div>
            <ProductDetail />
        </Layout>
    )
}

export { Home }
