import { getAll, remove } from "@/api";
import { useState, useEffect, router, $$ } from "@/utilities";
import swal from "sweetalert";
const ListProduct = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        getAll("products")
            .then((res) => res.data)
            .then((data) => setProduct(data))
    }, [])

    useEffect(() => {
        const btnDeleteElement = Array.from($$(".btn-delete"));
        const desMoreElement = Array.from($$(".desMore"));
        const desElement = Array.from($$(".desElement"));

        desElement.map((item, i) => item.addEventListener("mouseenter", () => {
            item.nextElementSibling.classList.toggle("hidden");
            console.log("đ");
        }))
        btnDeleteElement.map(btn => {
            btn.addEventListener("click", (e) => {
                let id = e.target.dataset.id;


                swal({
                    title: "Bạn có chắc là muốn xóa không??",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                })
                    .then((willDelete) => {
                        if (willDelete) {
                            remove("products", id)
                                .then(() => router.navigate("/admin/product"))
                        }
                    })

            })

        })
    })

    return /*html*/ `
            <div id="content" class=" transition-all ease-in-out duration-700  w-full">
                <div class=" w-full mt-24 ">
                <h1 class="text-3xl font-semibold  text-center  mb-10">Danh sách sản phẩm</h1>
                <a href="/admin/product/add"><button class="bg-green-900 p-3  my-4 rounded-md text-white">Thêm sản phẩm</button></a>
                    <table class="w-full text-center border-2">
                        <thead class="w-1/4">
                            <th class='border-2 border-black'>STT</th>
                            <th class='border-2 border-black'>Ảnh</th>
                            <th class="border-2 border-black">Tên</th>
                            <th class="border-2 border-black">Mô tả</th>
                            <th class="border-2 border-black">Giảm giá</th>
                            <th class="border-2 border-black">Giá</th>
                            <th class="border-2 border-black">Danh mục</th>
                            <th class="border-2 border-black">Lượt xem</th>
                            <th class="border-2 border-black">Ngày tạo</th>
                            <th class="border-2 border-black">Chức năng</th>
                        </thead>
                        <tbody class='w-full'>
                            ${product.map((item, i) => `
                                <tr class="border-2 hover:bg-slate-500 hover:text-white">
                                <td class="border-2">${i + 1}</td>
                                <td class="border-2"><img src="${item.img}" class="w-10 h-10 object-cover" /></td>
                                <td class="border-2">${item.name}</td>
                                <td class="border-2" >${item.des.slice(0, 10)} ${item.des.length == 10 ? "" : "<span class='desElement '>...</span>"}<span class='desMore hidden relative'>${item.des}</span></td>
                                <td class="border-2">${item.sale}</td>
                                <td class="border-2">${item.price}</td>
                                <td class="border-2">${item.category_id}</td>
                                <td class="border-2">${item.view}</td>
                                <td class="border-2">${item.createAt}</td>
                                <td class="border-2"><button class="btn-delete rounded-md bg-red-700 p-2 text-base text-white" data-id="${item.id}">Xóa</button> <a href="/admin/product/update/${item.id}"><button class="rounded-md bg-gray-700 p-2 text-base text-white" data-id="${item.id}">Sửa</button></a></td>
                            </tr>
                            `).join("")}
                        </tbody>
                    </table>
                </div>
                </div>
            </div>

    `
}

export default ListProduct;