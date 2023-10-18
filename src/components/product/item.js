const ItemProduct = (data) => {
    return `
        <div
            class="hover:border-1 flex flex-col relative transition-all ease-in-out hover:border-gray-300 hover:rounded-md hover:scale-95 hover:shadow-md hover:shadow-slate-500 p-3">
            <a class="proDetails flex-shrink-0" href="/product/${data.id}"><img class="w-full object-cover" src="${data.img}" alt=""></a>
            <span class="absolute bg-red-700 p-1 text-white text-sm bottom-[88%] right-[78%]">${data.sale}%</span>
            <div class="flex flex-col flex-1 mt-auto font-semibold my-4">
                <h1 class="text-xl  my-2">${data.name}</h1>
                <p class="text-red-700 mt-auto flex-shrink-0"><span class="text-lg ">${(data.price - (data.price * data.sale / 100)).toLocaleString('vi-VN')}</span>
                        <span class="underline">đ</span>
                        <sub class="line-through font-light text-gray-600 text-sm italic "> ${data.price.toLocaleString('vi-VN')}đ</sub>
                </p>

            </div>
            <button
                class="text-red-700 font-semibold bg-white border-2 mt-auto  border-red-700 rounded-md hover:bg-red-700 hover:text-white p-4 ">Mua
                Ngay
            </button>
        </div>
    `
}

export default ItemProduct;