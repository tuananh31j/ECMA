import { menus ,products,categories } from "../../datafake"
const ProductPage = () => {
    
    const productList = products.map(product => {
      return `
        <div>
          <h3>${product.name}</h3>
          <img src="${product.image}" alt="${product.name}" />
          <p>Price: ${product.price}</p>
        </div>
      `
    }).join('')
  

    const categoryList = categories.map(category => {
      return `<li>${category.name}</li>`
    }).join('')
  
    return `
      <h1>Product Page</h1>
      <h2>Categories:</h2>
      <ul>${categoryList}</ul>
      <h2>Products:</h2>
      ${productList}
    `
  }
  export default ProductPage