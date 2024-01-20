import React from "react"
import { ShoppingCartContext } from "../../context"
import './ProductDetail.css'
import { XMarkIcon } from '@heroicons/react/24/solid'

function ProductDetail() {
    const {
            isProductDetailOpen,
            ProductDetail,
            productInfo,
        } = React.useContext(ShoppingCartContext)

    return (
        <aside 
            className={`${isProductDetailOpen ? 'flex': 'hidden'} product-detail  flex-col fixed right-2 border border-black rounded-lg bg-white`}
        >
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div>
                    <XMarkIcon 
                        className='w-6 h-6 text-black cursor-pointer'
                        onClick={() => ProductDetail.setClose()}
                    />
                </div>
            </div>
            <figure className="px-6">
                <img 
                    className='w-full h-full object-cover rounded-lg'
                    src={productInfo.images?.[0]}
                    alt={productInfo.title}
                />
            </figure>
            <p className="flex flex-col p-6">
                <span className="font-medium text-2xl mb-2">${productInfo.price}</span>
                <span className="font-medium text-md">{productInfo.title}</span>
                <span className="font-light text-sm">{productInfo.description}</span>
            </p>
        </aside>
    )
}

export { ProductDetail }