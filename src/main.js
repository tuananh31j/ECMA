import { routersClient } from "@/router";
import LayoutMain from "@/layout/index.js";
import { layoutAuth } from "./layout";
import { render, useState, useEffect, $, $$, router } from "@/utilities";
import { HomePage, AboutPage, ProductPage, Admin, Login, Register, ContactPage, ProDetailPage } from "@/pages/client";

const app = $('#app');

router.on("/", () => LayoutMain(() => render(HomePage, app)))
router.on("/about", () => LayoutMain(() => render(AboutPage, app)))
router.on("/product", () => LayoutMain(() => render(ProductPage, app)))
router.on("/login", () => layoutAuth(() => render(Login, app)))
router.on("/register", () => layoutAuth(() => render(Register, app)))
router.on("/detail/:id", ({ data }) => LayoutMain(() => render(ProDetailPage, app, data)))
router.on("/admin", () => LayoutMain(() => render(HomePage, app)))
router.notFound(() => { app.innerHTML = "not found!" })
router.resolve();

