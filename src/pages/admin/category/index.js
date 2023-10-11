import { getAll, remove } from "../../../api";
import { useState, useEffect, router } from "../../../utilities";
import { $$ } from "../../../utilities";
import swal from "sweetalert";
const ListCategory = () => {
    const [categorys, setCategorys] = useState([]);
    useEffect(() => {
        getAll("categorys")
            .then((res) => res.data)
            .then((data) => setCategorys(data))
    }, [])

    useEffect(() => {
        const btnDeleteElement = Array.from($$(".btn-delete"));
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
                            remove("categorys", id)
                                .then(() => router.navigate("/admin/category"))

                        }
                    })

            })

        })
    })

    return /*html*/ `
            <div id="content" class=" transition-all ease-in-out duration-700  w-full">
                <div class=" w-full mt-24 ">
                <h1 class="text-3xl font-semibold  text-center  mb-10">Danh sách danh mục sản phẩm</h1>
                <a href="/admin/category/add"><button class="bg-green-900 p-3  my-4 rounded-md text-white">Thêm danh mục</button></a>
                    <table class="w-full text-center border-2">
                        <thead class="w-1/4">
                            <th class='border-2 border-black'>STT</th>
                            <th class="border-2 border-black">Tên</th>
                            <th class="border-2 border-black">Chức năng</th>
                        </thead>
                        <tbody class='w-full'>
                            ${categorys.map((item, i) => `
                                <tr class="border-2 hover:bg-slate-500 hover:text-white">
                                <td class="border-2">${i + 1}</td>
                                <td class="border-2">${item.name}</td>
                                <td class="border-2"><button class="btn-delete rounded-md bg-red-700 p-2 text-base text-white" data-id="${item.id}">Xóa</button> <a href="/admin/category/update/${item.id}"><button class="rounded-md bg-gray-700 p-2 text-base text-white" data-id="${item.id}">Sửa</button></a></td>
                            </tr>
                            `).join("")}
                        </tbody>
                    </table>
                </div>
                </div>
            </div>

    `
}

export default ListCategory;