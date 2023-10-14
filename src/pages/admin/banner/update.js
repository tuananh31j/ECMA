import axios from "axios";
import { add, get, update } from "../../../api";
import { useEffect, useState } from "../../../utilities";
import { $, $$ } from "@/utilities"

const UpdateBanner = (id) => {
    const [banner, setBanner] = useState({});


    useEffect(() => {
        get("banners", id)
            .then((res) => res.data)
            .then(data => setBanner(data))
    }, [])

    useEffect(() => {
        const formElement = $("#formUpdateBanner");
        const inputName = $("#name");
        const inputImg = $("#img");
        const err = $(".errElement");

        formElement.addEventListener("submit", (e) => {

            e.preventDefault();
            let bnData = {};
            if (inputName.value == '') {
                err.innerText = "Chưa nhập tên banner!";
            } else {

                (async () => {
                    if (inputImg.files[0]) {
                        const formData = new FormData;
                        formData.append("file", inputImg.files[0]);
                        formData.append("upload_preset", "n6ogapv9");
                        const { data } = await axios.post("https://api.cloudinary.com/v1_1/djcimgjcc/image/upload", formData, {
                            headers: {
                                "Content-Type": "aplication/form-data"
                            }
                        })
                        console.log(data);
                        bnData = {
                            id: banner.id,
                            name: inputName.value,
                            img_url: data.url,
                            menu: banner.menu
                        }
                        update("banners", bnData)
                            .then(() => swal("Cập nhật thành công!", "", "success"))
                            .then(() => {
                                errElement.map(item => item.innerText = "")
                                btn.classList.remove("rotate-[1000deg]")
                                console.log("done");
                            })
                    } else {
                        bnData = {
                            id: banner.id,
                            name: inputName.value,
                            menu: banner.menu,
                            img_url: banner.img_url
                        }
                        update("banners", bnData)
                            .then(() => {
                                swal("Cập nhật thành công!", "", "success");
                            })
                            .then(() => err.innerText = "")
                    }
                })()


            }
        })
    })
    return /*html*/ `
            <div id="content" class=" transition-all ease-in-out duration-700  w-full">
                <div class=" w-full mt-24 ">
                <h1 class="text-3xl font-semibold  text-center  mb-10">Chỉnh sửa banner</h1>
                <div>
                <img src="${banner.img_url}" class="w-full h-[500px] object-contain" alt="">
            </div>
                <p class="text-green-900 noti"></p>
                    <form id="formUpdateBanner">
                        <div>
                            <label for="name" class="text-xl font-semibold mb-2">Tên banner:</label></br>
                            <input placeholder="Nhập tên dnah mục" value="${banner.name}" class="border-2 p-3  border-black rounded-md focus:border-4 focus:border-gray-700" type="text" name="name" id="name">
                            <p class="text-red-700 errElement"></p>
                        </div>
                        <div>
                            <label for="img" class="text-xl font-semibold mb-2">Ảnh banner:</label></br>
                            <input placeholder="Nhập tên dnah mục" value="${banner.img_url}" class="border-2 p-3  border-black rounded-md focus:border-4 focus:border-gray-700" type="file" name="img" id="img">
                            <p class="text-red-700 errElement"></p>
                        </div>
                        <button class="bg-green-900 my-4 rounded-md p-2 active:translate-y-2 text-white">Cập nhật</button>
                    </form>
                </div>
                </div>
            </div>

    `
}


export default UpdateBanner;