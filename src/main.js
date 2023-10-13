import { layoutAuth, LayoutAdmin, LayoutMain } from "./layout";
import { render, useState, useEffect, $, $$, router } from "@/utilities";
import { HomePage, AboutPage, ProductPage, Admin, Login, Register, ContactPage, ProDetailPage } from "@/pages/client";
import Notfound from "./pages/client/notFound";
import ChartPage from "./pages/admin/statistical";
import ListBanner from "./pages/admin/banner";
import ListCategory from "./pages/admin/category";
import ListCustomer from "./pages/admin/customer";
import ListProduct from "./pages/admin/product";

import UpdateCategory from "./pages/admin/category/update";
import AddCategory from "./pages/admin/category/add";



import AddProduct from "./pages/admin/product/add";
import UpdateProduct from "./pages/admin/product/update";

import AddCustomer from "./pages/admin/customer/add";
import UpdateCustomer from "./pages/admin/customer/update";


const app = $('#app');
const root = $('#root');


// CLIENT
router.on("/", () => LayoutMain(() => render(HomePage, app)));
router.on("/about", () => LayoutMain(() => render(AboutPage, app)));
router.on("/product", () => LayoutMain(() => render(ProductPage, app)));
router.on("/contact", () => LayoutMain(() => render(ContactPage, app)));
router.on("/login", () => LayoutMain(() => render(Login, app)));
router.on("/register", () => LayoutMain(() => render(Register, app)));
router.on("/product/:id", ({ data }) => LayoutMain(() => render(ProDetailPage, app, data.id)));



// ADMIN
router.on("/admin/dashboard", () => LayoutAdmin(() => render(ChartPage, app)));
//product
router.on("/admin/product", () => LayoutAdmin(() => render(ListProduct, app)));
router.on("/admin/product/update/:id", ({ data }) => LayoutAdmin(() => render(UpdateProduct, app, data.id)));
router.on("/admin/product/add", () => LayoutAdmin(() => render(AddProduct, app)));
//category
router.on("/admin/category", () => LayoutAdmin(() => render(ListCategory, app)));
router.on("/admin/category/update/:id", ({ data }) => LayoutAdmin(() => render(UpdateCategory, app, data.id)));
router.on("/admin/category/add", () => LayoutAdmin(() => render(AddCategory, app)));
//customer
router.on("/admin/customer", () => LayoutAdmin(() => render(ListCustomer, app)));
router.on("/admin/customer/update/:id", ({ data }) => LayoutAdmin(() => render(UpdateCustomer, app, data.id)));
router.on("/admin/customer/add", () => LayoutAdmin(() => render(AddCustomer, app)));



router.notFound(() => render(Notfound, root));
router.resolve();



























