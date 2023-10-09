import { routersClient } from "@/router";
import { layoutAuth, LayoutAdmin, LayoutMain } from "./layout";
import { render, useState, useEffect, $, $$, router } from "@/utilities";
import { HomePage, AboutPage, ProductPage, Admin, Login, Register, ContactPage, ProDetailPage } from "@/pages/client";
import Notfound from "./pages/client/notFound";

import ChartPage from "./pages/admin/statistical";


const app = $('#app');
const root = $('#root');


// CLIENT
router.on("/", () => LayoutMain(() => render(HomePage, app)));
router.on("/about", () => LayoutMain(() => render(AboutPage, app)));
router.on("/product", () => LayoutMain(() => render(ProductPage, app)));
router.on("/contact", () => LayoutMain(() => render(ContactPage, app)));
router.on("/login", () => layoutAuth(() => render(Login, app)));
router.on("/register", () => layoutAuth(() => render(Register, app)));
router.on("/product/:id", ({ data }) => LayoutMain(() => render(ProDetailPage, app, data)));



// ADMIN
router.on("/admin/dashboard", () => LayoutAdmin(() => render(ChartPage, app)));
//product
router.on("/admin/product", () => LayoutAdmin(() => render(HomePage, app)));
router.on("/admin/product/update", () => LayoutAdmin(() => render(HomePage, app)));
router.on("/admin/product/add", () => LayoutAdmin(() => render(HomePage, app)));
//category
router.on("/admin/category", () => LayoutAdmin(() => render(HomePage, app)));
router.on("/admin/category/update", () => LayoutAdmin(() => render(HomePage, app)));
router.on("/admin/category/add", () => LayoutAdmin(() => render(HomePage, app)));
//customer
router.on("/admin/customer", () => LayoutAdmin(() => render(HomePage, app)));
router.on("/admin/customer/update", () => LayoutAdmin(() => render(HomePage, app)));
router.on("/admin/customer/add", () => LayoutAdmin(() => render(HomePage, app)));



router.notFound(() => render(Notfound, app));
router.resolve();

