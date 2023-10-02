import { menus } from "@/data";
import Banner from '@/layout/banner.js';
const Header = () => {
    return `
    <header >
    
    <div class="flex gap-3 items-center">
    <div>
    <img src="https://picsum.photos/55/55" alt="">
</div>
<nav>
    <ul class="flex gap-5">
        ${menus.map(item => {
        return `
            <li><a href="${item.path}">${item.name}</a></li>
            `
    }).join("")}
    </ul>
</nav>
    </div>
    ${Banner()}
    
</header>
    `
}

export default Header;