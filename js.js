const root = document.querySelector("#root");
const pro = [
    {
        id: 1,
        name: "pro 1",
        price: 200
    },
    {
        id: 2,
        name: "pro 2",
        price: 888
    },
    {
        id: 3,
        name: "pro 3",
        price: 666
    },
    {
        id: 4,
        name: "pro 4",
        price: 555
    },
    {
        id: 5,
        name: "pro 5",
        price: 444
    }
]


let pros = pro.map((product) => {
    return `<div  id="${product.id}">
    <div>
    <a href=""> 
        <h3>${product.name}</h3>
        <p>${product.price}</p>
    </a>
    </div>
    </div>`
}).join("");
root.innerHTML = pros