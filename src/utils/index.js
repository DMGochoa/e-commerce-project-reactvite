/**
 * This function calculates total price of a new order
 * @param {Array} products cartProduct: Array of Objects
 * @returns {numer} Total price
 */
export const totalPrice = (products) => {
  let sum = 0
  products.forEach(product => sum += product.price)
  return sum
}

class AppLocalStorage {
  constructor(keyName, initialValue = {}) {
    this.key = keyName
    this.initialValue = initialValue
    this.init()
  }

  init() {
    const data = this.get()
    if (!data) {
      this.set(this.initialValue)
    }
  }

  get() {
    let result = JSON.parse(localStorage.getItem(this.key))
    if (!result) {
      this.set(this.initialValue)
      result = this.initialValue
    }
    return result
  }

  set(element) {
    localStorage.setItem(this.key, JSON.stringify(element))
  }

  clear() {
    this.deleteStorage()
    this.init()
  }

  deleteStorage() {
    localStorage.removeItem(this.key)
  }

}

export { AppLocalStorage }