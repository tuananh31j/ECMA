import Navigo from "navigo";
import { HomePage, AboutPage, ProductPage, Admin } from "@/pages";
import LayoutMain from "@/layout/index.js";
import { $, $$, render } from "@/utilities";
const app = $('#app');
const router = new Navigo("/", { linksSelector: "a" });

router.on("/", () => {
    render(LayoutMain(HomePage), app);
})

router.on("/about", () => {
    render(LayoutMain(AboutPage), app);
})

router.on("/product", () => {
    render(LayoutMain(ProductPage), app);
})

router.on("/admin", () => {
    render(LayoutMain(Admin), app);
})

router.notFound(() => {
    app.innerHTML = "not found!";
})

router.resolve();
