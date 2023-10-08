
import Header from "@/components/header";
import Footer from "@/components/footer";

const LayoutMain = (content) => {
    console.log(content());
    return `
    <div>
    ${Header()}
    ${content()}
    ${Footer()}
    </div>
    `;
}
export { Header, Footer };
export default LayoutMain;