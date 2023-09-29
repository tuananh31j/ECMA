const Menu = (data) => {
    return `
    ${data.map(item => (
        <li><a href="${item.path}" class="hover:bg-slate-600 hover:text-white">${item.name}</a></li>

    ))}
    `
}

export default Menu;