import { layoutAuth, LayoutAdmin, LayoutMain } from "./layout";
import { render, $, router } from "@/utilities";
import { HomePage, AboutPage, ProductPage, Login, Register, ContactPage, ProDetailPage } from "@/pages/client";
import ChartPage from "./pages/admin/statistical";
import ListCategory from "./pages/admin/category";
import UpdateCategory from "./pages/admin/category/update";
import AddCategory from "./pages/admin/category/add";

import ListBanner from "./pages/admin/banner";
import UpdateBanner from "./pages/admin/banner/update";

import ListProduct from "./pages/admin/product";
import AddProduct from "./pages/admin/product/add";
import UpdateProduct from "./pages/admin/product/update";

import ListCustomer from "./pages/admin/customer";
import AddCustomer from "./pages/admin/customer/add";
import UpdateCustomer from "./pages/admin/customer/update";

import Notfound from "./pages/client/notFound";

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

const user = localStorage.getItem("user");

if (user && JSON.parse(user).role == 1) {
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
    //banner
    router.on("/admin/banner", () => LayoutAdmin(() => render(ListBanner, app)));
    router.on("/admin/banner/update/:id", ({ data }) => LayoutAdmin(() => render(UpdateBanner, app, data.id)));
}



router.notFound(() => LayoutMain(() => render(Notfound, app)));
router.resolve();



























