import React from "react"
import { XMarkIcon } from '@heroicons/react/24/solid'

function OrderCard(props) {
    const {
        id,
        title,
        imageUrl,
        price,
        handleDelete,
    } = props

    let renderXMarkIcon
    if (handleDelete) {
        renderXMarkIcon = (
            <XMarkIcon 
                className='w-5 h-5 text-black cursor-pointer'
                onClick={() => handleDelete(id)}
            />
        )
    }
    return (
        <div className="flex justify-between items-center mb-2">
            <div className="flex items-center gap-2">
                <figure className="w-20 h-20">
                    <img
                        className="w-full h-full rounded-lg object-cover"
                        src={imageUrl}
                        alt={title}
                    />
                </figure>
                <p className="text-sm font-light">
                    {title}
                </p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-lg font-medium">
                    ${price}
                </p>
                {renderXMarkIcon}
            </div>
        </div>
    )
}

export { OrderCard }