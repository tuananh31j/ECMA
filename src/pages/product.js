import { products } from "../data";
const ProductPage = () => {
    return `
    <div class="flex gap-5">
    ${products.map(item => {
        return `
        
        <div>
            <a><img src="${item.image}" /></a>
            <div>
            <h1>${item.name}</h1>
            <p${item.price}></p$>
            </div>
        </div>
        
        `
    }).join('')}
    </div>
    `;
}

export default ProductPage;

