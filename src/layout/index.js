import { useEffect } from "../utilities";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { $ } from "../utilities";
import Dashboard from "../components/dashboard";
const headerElement = $("#header");
const footerElement = $("#footer");
const root = $("#root");

const LayoutMain = async (content) => {

    console.log("h");
    headerElement.innerHTML = Header();
    await content();
    console.log("b");
    footerElement.innerHTML = Footer();
}
const layoutAuth = async (content) => {
    await content();

}

const LayoutAdmin = async (content) => {

    headerElement.innerHTML = Dashboard();
    content();
    footerElement.innerHTML = "";
}
export { layoutAuth, LayoutAdmin, LayoutMain };