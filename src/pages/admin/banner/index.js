import { getAll, remove } from "../../../api";
import { useState, useEffect, router } from "../../../utilities";
import { $$ } from "../../../utilities";
import swal from "sweetalert";
const ListBanner = () => {
    const [banners, setBanners] = useState([]);
    useEffect(() => {
        getAll("banners")
            .then((res) => res.data)
            .then((data) => setBanners(data))
    }, [])



    return /*html*/ `
            <div id="content" class=" transition-all ease-in-out duration-700  w-full">
                <div class=" w-full mt-24 ">
                <h1 class="text-3xl font-semibold  text-center  mb-10">Danh sách banner</h1>
                    <table class="w-full text-center border-2">
                        <thead class="w-1/4">
                            <th class='border-2 border-black'>STT</th>
                            <th class="border-2 border-black">Tên</th>
                            <th class="border-2 border-black">Page</th>
                            <th class="border-2 border-black">Ảnh</th>
                            <th class="border-2 border-black">Chức năng</th>
                        </thead>
                        <tbody class='w-full'>
                            ${banners.map((item, i) => `
                                <tr class="border-2 hover:bg-slate-500 hover:text-white">
                                <td class="border-2">${i + 1}</td>
                                <td class="border-2">${item.name}</td>
                                <td class="border-2">
                                    ${item.menu == 1 ? "Trang chủ" : ""}
                                    ${item.menu == 2 ? "Trang Sản phẩm" : ""}
                                    ${item.menu == 3 ? "Trang liên hệ" : ""}
                                    ${item.menu == 4 ? "Trang giới thiệu" : ""}
                                </td>
                                <td class="border-2"><img src="${item.img_url}" class="w-full mx-auto h-10 object-cover" /></td>
                                <td class="border-2"><a href="/admin/banner/update/${item.id}"><button class="rounded-md bg-gray-700 p-2 text-base text-white">Sửa</button></a></td>
                            </tr>
                            `).join("")}
                        </tbody>
                    </table>
                </div>
                </div>
            </div>

    `
}

export default ListBanner;