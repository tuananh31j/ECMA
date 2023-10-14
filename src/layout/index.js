import { useEffect } from "../utilities";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { $ } from "../utilities";
import { getAll } from "../api";
import Classes from "@/components/style/main.module.css";
import Dashboard from "../components/dashboard";
const headerElement = $("#header");
const footerElement = $("#footer");
const rootElement = $("#root");
const appElement = $("#app");


const LayoutMain = async (content) => {

    rootElement.classList.remove(`${Classes.admin}`);
    appElement.classList.remove("w-[1160px]")
    appElement.classList.remove("-translate-x-[300px]")

    headerElement.innerHTML = Header();
    await content();
    footerElement.innerHTML = Footer();

    const useEl = $(".userElement");
    const menuEl = $(".menuElement");
    const btnLogOut = $(".btn-logout");
    btnLogOut.addEventListener("click", () => {
        localStorage.removeItem("user");
        window.location.href = "/";
    })
    useEl.addEventListener("mouseenter", () => {
        menuEl.classList.remove("hidden");
    })

    menuEl.addEventListener("mouseleave", () => {
        menuEl.classList.add("hidden")
    })
    const cateElement = $("#cate");
    const cateMenuElement = $(".menuCate");

    cateElement.addEventListener("mouseenter", () => {
        cateMenuElement.classList.remove("hidden");
    })

    cateMenuElement.addEventListener("mouseleave", () => {
        cateMenuElement.classList.add("hidden")
    })
}
const layoutAuth = async (content) => {

    await content();
    rootElement.classList.remove(`${Classes.admin}`);


}

const LayoutAdmin = async (content) => {

    rootElement.classList.add("gap-14");
    rootElement.classList.add(`${Classes.admin}`);

    useEffect(() => {
        const menuButton = $("#menuButton");
        const menuElement = $("#menuElement");


        menuButton.addEventListener("click", () => {
            menuElement.classList.toggle("-translate-x-full");
            menuButton.classList.toggle("-translate-x-[300px]");
            menuButton.classList.toggle("rotate-180");
            appElement.classList.toggle("w-[1160px]")
            appElement.classList.toggle("-translate-x-[300px]")
        })

    }, [])
    headerElement.innerHTML = Dashboard();
    content();
    footerElement.innerHTML = "";
    
}
export { layoutAuth, LayoutAdmin, LayoutMain };