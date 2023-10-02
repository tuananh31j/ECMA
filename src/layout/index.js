
import Header from "./header.js";
import Footer from "./footer.js";

const LayoutMain = (content) => {
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