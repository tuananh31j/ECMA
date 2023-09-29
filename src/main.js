import Navigo from "navigo";

import { ProductPage } from "@/pages/product.js";

const app = document.querySelector('#app');
const router = new Navigo("/", { linksSelector: "a" });


router.on("/", () => {
    app.innerHTML = `<div class="bg-red-600">home</div>`;
})
router.on("/contact", () => {
    app.innerHTML = `<div>contact</div>`;
})
router.on("/product", () => {
    app.innerHTML = ProductPage();
})

router.resolve();