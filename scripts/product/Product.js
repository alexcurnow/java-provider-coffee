export const Product = productObject => {
  return `
  <section class="product">
  <h4>${productObject.name}</h4>
  <ul>
  <li>Bean: ${productObject.beanType}</li>
  <li>Roast: ${productObject.roastType}</li>
  <li>Price: ${productObject.price}</li>
  </ul>
  </section>
  `
}