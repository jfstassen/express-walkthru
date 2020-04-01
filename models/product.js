//core thing of the app is a product so product.js
const products = [];

module.exports = class Product {
  constructor(t){
    this.title = t;
  }

  save(){
    products.push(this)
  }

  static fetchAll(){
    return products;
  }
}