import React from "react"
import { Layout } from "../../components/Layout"
import { ShoppingCartContext } from "../../context"
import { OrderCard } from "../../components/OrderCard"

function MyOrder() {
    const {
        order,
    } = React.useContext(ShoppingCartContext)
    console.log(order?.slice(-1)[0])
    return (
        <Layout>
            Cosas que voy hacer
            <div className="flex flex-col w-80">
                {
                    order?.slice(-1)[0].products.map(product => (
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
                {order?.slice(-1)[0].date.toDateString()}
                <div className="flex justify-between">
                    <p>
                        Total:
                    </p>
                    <p className="text-lg font-medium">
                        ${order?.slice(-1)[0].total_price}
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export { MyOrder }