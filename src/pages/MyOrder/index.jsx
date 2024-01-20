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
            <div className="px-6 overflow-y-scroll flex-1">
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
        </Layout>
    )
}

export { MyOrder }