import { useEffect } from "../utilities";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { $ } from "../utilities";
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

    console.log("h");
    headerElement.innerHTML = Header();
    await content();
    console.log("b");
    footerElement.innerHTML = Footer();
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