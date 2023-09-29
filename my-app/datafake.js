const menus = [
    { id: 1, path: "/", name: "HomePage" },
    { id: 2, path: "/product", name: "Product" },
    { id: 3, path: "/Contact", name: "Contact" },
    { id: 4, path: "/Admin", name: "Admin" },
 
]
const products = [
    { id: 1, name: "Product 1", image: "https://picsum.photos/200/250 ", price: 1000, categoryId: 1 },
    { id: 2, name: "Product 2", image: "https://picsum.photos/200/250 ", price: 2000, categoryId: 2 },
    { id: 3, name: "Product 3", image: "https://picsum.photos/200/250 ", price: 3000, categoryId: 3 }
]
const categories = [
    { id: 1, name: "Category 1" },
    { id: 2, name: "Category 2" },
    { id: 3, name: "Category 3" }
]
export { menus,products,categories }
