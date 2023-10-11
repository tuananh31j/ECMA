import { routersClient } from "@/router";
import { layoutAuth, LayoutAdmin, LayoutMain } from "./layout";
import { render, useState, useEffect, $, $$, router } from "@/utilities";
import { HomePage, AboutPage, ProductPage, Admin, Login, Register, ContactPage, ProDetailPage } from "@/pages/client";
import Notfound from "./pages/client/notFound";
import ChartPage from "./pages/admin/statistical";
import ListBanner from "./pages/admin/banner";
import ListCategory from "./pages/admin/category";
import ListComment from "./pages/admin/comment";
import ListCustomer from "./pages/admin/customer";
import ListProduct from "./pages/admin/product";
import ListSize from "./pages/admin/size";

import UpdateCategory from "./pages/admin/category/update";
import AddCategory from "./pages/admin/category/add";

import AddProduct from "./pages/admin/product/add";


const app = $('#app');
const root = $('#root');


// CLIENT
router.on("/", () => LayoutMain(() => render(HomePage, app)));
router.on("/about", () => LayoutMain(() => render(AboutPage, app)));
router.on("/product", () => LayoutMain(() => render(ProductPage, app)));
router.on("/contact", () => LayoutMain(() => render(ContactPage, app)));
router.on("/login", () => layoutAuth(() => render(Login, root)));
router.on("/register", () => layoutAuth(() => render(Register, root)));
router.on("/product/:id", ({ data }) => LayoutMain(() => render(ProDetailPage, app, data.id)));



// ADMIN
router.on("/admin/dashboard", () => LayoutAdmin(() => render(ChartPage, app)));
//product
router.on("/admin/product", () => LayoutAdmin(() => render(ListProduct, app)));
router.on("/admin/product/update", () => LayoutAdmin(() => render(HomePage, app)));
router.on("/admin/product/add", () => LayoutAdmin(() => render(AddProduct, app)));
//category
router.on("/admin/category", () => LayoutAdmin(() => render(ListCategory, app)));
router.on("/admin/category/update/:id", ({ data }) => LayoutAdmin(() => render(UpdateCategory, app, data.id)));
router.on("/admin/category/add", () => LayoutAdmin(() => render(AddCategory, app)));
//customer
router.on("/admin/customer", () => LayoutAdmin(() => render(ListCustomer, app)));
router.on("/admin/customer/update", () => LayoutAdmin(() => render(HomePage, app)));
router.on("/admin/customer/add", () => LayoutAdmin(() => render(HomePage, app)));



router.notFound(() => render(Notfound, root));
router.resolve();

