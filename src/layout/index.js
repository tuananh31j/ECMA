
import Header from "@/components/header";
import Footer from "@/components/footer";
import { $ } from "../utilities";
const headerElement = $("#header");
const footerElement = $("#footer");

const LayoutMain = async (content) => {
    headerElement.innerHTML = Header();
    await content();
    footerElement.innerHTML = Footer();
}
const layoutAuth = async (content) => {
    await content();

}
export { Header, Footer, layoutAuth };
export default LayoutMain;