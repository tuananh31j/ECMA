import { add } from "../../../api";
import { useEffect, useState } from "../../../utilities";
import { $, $$ } from "@/utilities"

const AddCategory = () => {
    useEffect(() => {
        const formElement = $("#formAddCategory");
        const inputName = $("#name");
        const err = $(".errElement");

        formElement.addEventListener("submit", (e) => {

            e.preventDefault();
            let data = {};
            if (inputName.value == '') {
                err.innerText = "Chưa nhập tên danh mục!";
            } else {
                data = {
                    name: inputName.value
                }
                console.log(data);
                add("categorys", data)
                    .then(() => {
                        swal("Thêm thành công!", "", "success");
                    })
                    .then(() => err.innerText = "")
            }
        })
    })
    return /*html*/ `
            <div id="content" class=" transition-all ease-in-out duration-700  w-full">
                <div class=" w-full mt-24 ">
                <h1 class="text-3xl font-semibold  text-center  mb-10">Thêm mới danh mục</h1>
                <p class="text-green-900 noti"></p>
                    <form id="formAddCategory">
                        <div>
                            <label for="name" class="text-xl font-semibold mb-2">Tên danh mục:</label></br>
                            <input placeholder="Nhập tên dnah mục" class="border-2 p-3  border-black rounded-md focus:border-4 focus:border-gray-700" type="text" name="name" id="name">
                            <p class="text-red-700 errElement"></p>
                        </div>
                        <button class="bg-green-900 my-4 rounded-md p-2 text-white">Thêm</button>
                    </form>
                </div>
                </div>
            </div>

    `
}


export default AddCategory;