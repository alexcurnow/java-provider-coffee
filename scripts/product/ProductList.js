import { useProducts } from "./productDataProvider.js"
import { Product } from "./Product.js"  

const contentElement = document.querySelector('.mainContainer')

export const RenderProductList = () => {
  const productData = useProducts()
  productData.forEach(product => contentElement.innerHTML += Product(product))
}