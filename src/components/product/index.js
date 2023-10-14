import ItemProduct from "@/components/product/item.js";
import { render, useState, useEffect, $, $$ } from "../../utilities"
import { getAll, get, add, remove, update } from "@/api"

const ListPro = (products) => {


    console.log(products);
    return `
    
    <div class="grid grid-cols-4 gap-5 text-center">
        ${products.map((item) => ItemProduct(item)).join("")}
    </div>
</div>
    `
}


export { ListPro };