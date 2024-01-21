import React from "react"
import { Link } from "react-router-dom"
import { Layout } from "../../components/Layout"
import { ShoppingCartContext } from "../../context"
import { OrdersCard } from "../../components/OrdersCard"

function MyOrders() {
    const {
        order,
    } = React.useContext(ShoppingCartContext)
    return (
        <Layout>
            <div className="flex w-80 items-center justify-center relative mb-6">
                <h1>My Orders</h1>
            </div>
            
            {
                order.map((order, index) => (
                    <Link key={index} to={`/my-orders/${index}`}>
                        <OrdersCard
                            date={order.date.toLocaleDateString("en-US")}
                            totalPrice={order.totalPrice}
                            totalProducts={order.totalProducts}
                        />
                    </Link>
                ))
                
            }
        </Layout>
    )
}

export { MyOrders }