import { routersClient } from "@/router";
import LayoutMain from "@/layout/index.js";
import { layoutAuth } from "./layout";
import { render, useState, useEffect, $, $$, router } from "@/utilities";

const app = $('#app');
const root = $('#root');

routersClient.map(item => {
    router.on(item.path, () => {
        LayoutMain(() => render(item.element, app));
    })
})

// router.on("/", () => render(LayoutMain, app, HomePage))
// router.on("/about", () => render(LayoutMain, app, AboutPage))
// router.on("/product", () => render(LayoutMain, app, ProductPage))
// router.on("/logIn", () => render(LogIn, app))
// router.on("/register", () => render(Register, app))
// router.on("/admin", () => render(Admin, app))
router.notFound(() => { app.innerHTML = "not found!" })
router.resolve();

