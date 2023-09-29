
import Header from "./header.js";
import Footer from "./footer.js";
const layoutMain = (content, data) => {
    return `
    ${Header(menus)}
    ${content()}
    ${Footer()}
    `;
}

export default layoutMain;