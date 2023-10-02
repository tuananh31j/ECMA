import Navigo from "navigo";
import { HomePage, AboutPage, ProductPage, Admin } from "./pages";
import LayoutMain from "@/layout/index.js";
import { Header, Footer } from "./layout/index.js"
const app = document.querySelector('#app');
const router = new Navigo("/", { linksSelector: "a" });

router.on("/", () => {
    app.innerHTML = LayoutMain(HomePage);
})

router.on("/about", () => {
    app.innerHTML = LayoutMain(AboutPage);
})

router.on("/product", () => {
    // Sử dụng template literals để kết hợp LayoutMain và ProductPage
    app.innerHTML = LayoutMain(ProductPage);
})

router.on("/admin", () => {
    app.innerHTML = LayoutMain(Admin);
})

router.notFound(() => {
    app.innerHTML = "not found!";
})

router.resolve();
