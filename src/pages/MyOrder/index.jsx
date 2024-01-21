import React from "react"
import { Link } from "react-router-dom"
import { Layout } from "../../components/Layout"
import { ShoppingCartContext } from "../../context"
import { OrderCard } from "../../components/OrderCard"
import { ChevronLeftIcon } from '@heroicons/react/24/solid'

function MyOrder() {
    const {
        order,
    } = React.useContext(ShoppingCartContext)
    const currentpath = window.location.pathname
    let index = currentpath.substring(currentpath.lastIndexOf('/')+1)
    if (index === 'last') index = order.length - 1

    return (
        <Layout>
            <div className="flex w-80 items-center justify-center relative mb-6">
                <Link to="/my-orders" className="absolute left-0">
                    < ChevronLeftIcon className="w-6 h-6 text-black cursor-pointer" />
                </Link>
                <h1>My Order</h1>
            </div>
            <div className="flex flex-col w-80">
                {
                    order[index].products.map(product => (
                        <OrderCard
                            id={product.id}
                            key={product.id}
                            title={product.title}
                            imageUrl={product.images?.[0]}
                            price={product.price}
                        />
                    ))
                }
            </div>
            <div className="">
                {order[index].date.toDateString()}
                <div className="flex justify-between">
                    <p>
                        Total:
                    </p>
                    <p className="text-lg font-medium">
                        ${order[index].totalPrice}
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export { MyOrder }