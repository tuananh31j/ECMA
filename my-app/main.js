import Navigo from "navigo"
// import Homepage from "./src/pages/Homepage"
// import ProductPage from "./src/pages/Product"
// import AboutPage from "./src/pages/About"

import { Homepage, ProductPage, AboutPage, Admin, ContactPage } from "./src/pages"



const router = new Navigo("/")

const render = (component, container) => {
  container.innerHTML = component()
}

const app = document.querySelector('#app')

router.on("/", () => render(Homepage, app))
router.on("/product", () => render(ProductPage, app))
router.on("/Contact", () => render(ContactPage, app))
router.on("/Admin", () => render(Admin, app))


router.notFound(() => {
  app.innerHTML = "<h1>Page Not Found</h1>"
})

router.resolve();

