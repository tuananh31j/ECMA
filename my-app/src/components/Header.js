import { menus ,products,categories } from "../../datafake"
import ListItem from "./ListItem";

const Header = () => {
    // console.log(menus);
    return `
        <header >
        
            <ul class="flex px-2">
            ${menus.map((item) => {
        return ListItem(item)
    }).join("")}
            </ul>
            
        </header>
    `
}
export default Header