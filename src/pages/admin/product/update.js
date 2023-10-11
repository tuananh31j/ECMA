import { add, get, update } from "../../../api";
import { useEffect, useState } from "../../../utilities";
import { $, $$ } from "@/utilities"

const UpdateProduct = (id) => {
    const [err, setErr] = useState('');
    const [category, setCategory] = useState({});


    useEffect(() => {
        get("categorys", id)
            .then((res) => res.data)
            .then(data => setCategory(data))
    }, [])

    useEffect(() => {
        const formElement = $("#formUpdateProduct");
        const inputName = $("#name");
        const noti = $(".noti");

        formElement.addEventListener("submit", (e) => {

            e.preventDefault();
            let data = {};
            if (inputName.value == '') {
                setErr("Chưa nhập tên danh mục!");
            } else {
                data = {
                    id: id,
                    name: inputName.value
                }
                console.log(data);
                update("categorys", data)
                    .then(() => {
                        swal("Cập nhật thành công!", "", "success");
                    })
            }
        })
    })
    return /*html*/ `
            <div id="content" class=" transition-all ease-in-out duration-700  w-full">
                <div class=" w-full mt-24 ">
                <h1 class="text-3xl font-semibold  text-center  mb-10">Thêm mới danh mục</h1>
                <p class="text-green-900 noti"></p>
                    <form id="formUpdateProduct">
                        <div>
                            <label for="name" class="text-xl font-semibold mb-2">Tên danh mục:</label></br>
                            <input placeholder="Nhập tên sản phẩm" value="${category.name}" class="border-2 p-3  border-black rounded-md focus:border-4 focus:border-gray-700" type="text" name="name" id="name">
                            <p class="text-red-700">${err}</p>
                        </div>
                        <button class="bg-green-900 my-4 rounded-md p-2 text-white">Cập nhật</button>
                    </form>
                </div>
                </div>
            </div>

    `
}


export default UpdateProduct;