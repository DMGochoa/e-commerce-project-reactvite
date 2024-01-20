/**
 * This function calculates the total price of the products that
 * are passed as an argument. It supose that we have an order cart
 * and we want to know the total price of the products that are in
 * the cart.
 * @param {Array} products Array of products
 * @returns {Number} Returns the total price of the products
 */
function totalPrice (products) {
    return products.reduce((acc, product) => {
        return acc + product.price
    }, 0)
}

export { totalPrice }