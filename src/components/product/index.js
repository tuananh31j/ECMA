import ItemProduct from "@/components/product/item.js";
import { render, useState, useEffect, $, $$ } from "../../utilities"
import { getAll, get, add, remove, update } from "@/api"

const ListProNew = (products) => {
    

    console.log(products);
    return `
    <div class="px-10 my-20">
    <h1 class="text-3xl my-10 font-bold">Sản phẩm mới nhất</h1>
    <div class="grid grid-cols-4 gap-5 text-center">
        ${products.map((item) => ItemProduct(item)).join("")}
    </div>
</div>
    `
}


export { ListProNew };