import Menu from "./menu";
const Header = (data) => {
    return `
    <header class="flex gap-3 items-center">
    <div>
        <img src="https://picsum.photos/55/55" alt="">
    </div>
    <nav>
        <ul class="flex gap-5">
            ${Menu(data)}
            
        </ul>
    </nav>
</header>
    `
}

export default Header;