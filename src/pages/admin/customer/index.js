import { getAll, remove } from "@/api";
import { useState, useEffect, router, $$ } from "@/utilities";
import swal from "sweetalert";
const ListCustomer = () => {
    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        getAll("customers")
            .then((res) => res.data)
            .then((data) => setCustomers(data))
    }, [])

    useEffect(() => {
        const btnDeleteElement = Array.from($$(".btn-delete"));
        const desElement = Array.from($$(".desElement"));

        desElement.map((item, i) => item.addEventListener("click", (e) => {
            e.target.nextElementSibling.classList.toggle("hidden");
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
                            remove("customers", id)
                                .then(() => router.navigate("/admin/customer"))
                        }
                    })

            })

        })
    })

    return /*html*/ `
            <div id="content" class=" transition-all ease-in-out duration-700  w-full">
                <div class=" w-full mt-24 ">
                <h1 class="text-3xl font-semibold  text-center  mb-10">Danh sách tài khoản</h1>
                <a href="/admin/customer/add"><button class="bg-green-900 p-3  my-4 rounded-md text-white">Thêm tài khoản</button></a>
                    <table class="w-full text-center border-2">
                        <thead class="w-1/4">
                            <th class='border-2 border-black'>STT</th>
                            <th class='border-2 border-black'>Ảnh</th>
                            <th class="border-2 border-black">Tên</th>
                            <th class="border-2 border-black">Email</th>
                            <th class="border-2 border-black">Số điện thoại</th>
                            <th class="border-2 border-black">Ngày tạo</th>
                            <th class="border-2 border-black">Vai trò</th>
                            <th class="border-2 border-black">Chức năng</th>
                        </thead>
                        <tbody class='w-full'>
                            ${customers.map((item, i) => `
                                <tr class="border-2 hover:bg-slate-500 hover:text-white">
                                <td class="border-2">${i + 1}</td>
                                <td class="border-2"><img src="${item.img}" class="w-10 h-10 object-cover" /></td>
                                <td class="border-2">${item.name}</td>
                                <td class="border-2" >${item.email}</span></td>
                                <td class="border-2" >${item.phone}</span></td>
                                <td class="border-2">${item.createAt}</td>
                                <td class="border-2">${item.role == 1 ? "<span class='text-red-700'>Admin</span>"
            : "<span class='text-green-900'>User</span>"
        }</td>
                                <td class="border-2"><button class="btn-delete rounded-md bg-red-700 p-2 text-base text-white" data-id="${item.id}">Xóa</button> <a href="/admin/customer/update/${item.id}"><button class="rounded-md bg-gray-700 p-2 text-base text-white">Sửa</button></a></td>
                            </tr>
                            `).join("")}
                        </tbody>
                    </table>
                </div>
                </div>
            </div>

    `
}

export default ListCustomer;