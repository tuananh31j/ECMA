import Navigo from "navigo";
import { HomePage, AboutPage, ProductPage } from "./pages";
import layoutMain from "./layout";
import { menus, products, categories } from "@/data";

const app = document.querySelector('#app');
const router = new Navigo("/", { linksSelector: "a" });


router.on("/", () => {
    app.innerHTML = "<div>gagds</div>";
})
router.on("/About", () => {
    app.innerHTML = 'div';
})
router.on("/product", () => {
    app.innerHTML = layoutMain(ProductPage, menus);
})

router.on("/admin", () => {
    app.innerHTML = ProductPage();
})

router.notFound(() => {
    app.innerHTML = "not found!";
})

router.resolve();