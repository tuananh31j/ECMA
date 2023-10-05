
import Navigo from "navigo";
import { HomePage, AboutPage, ProductPage, Admin, LogIn, Register } from "@/pages/client";
import LayoutMain from "@/layout/index.js";
import { render, useState, useEffect, $, $$ } from "@/utilities";

const app = $('#app');
const router = new Navigo("/", { linksSelector: "a" });

router.on("/", () => {
    render(LayoutMain, app, HomePage);
})

router.on("/about", () => {
    render(AboutPage, app);
})

router.on("/product", () => {
    render(ProductPage, app);
})

router.on("/logIn", () => {
    render(LogIn, app);
})

router.on("/register", () => {
    render(Register, app);
})

router.on("/admin", () => {
    render(Admin, app);
})

router.notFound(() => {
    app.innerHTML = "not found!";
})

router.resolve();

