import axios from "axios";
import { add, getAll } from "../../../api";
import { isValidate, useEffect, useState } from "../../../utilities";
import { $, $$ } from "@/utilities"

const AddProduct = () => {
    const [err, setErr] = useState({})
    const [cates, setCategorys] = useState([]);
    let a = 1;
    useEffect(() => {
        // getAll("categorys")
        //     .then((res) => res.data)
        //     .then((data) => setCategorys(data))
        getAll("categorys")
            .then(({ data }) => setCategorys(data))
    }, [])
    useEffect(() => {
        const formElement = $("#formAddProduct");
        const inputName = $("#name");
        const inputSale = $("#sale");
        const inputPrice = $("#price");
        const inputCate = $("#cate");
        const inputImage = $("#img");
        const inputDes = $("#des");
        const btn = $(".btn-submit");
        const textElement = $(".textElement");
        const loadElement = $(".loadElement");

        const errElement = Array.from($$(".errElement"));

        const inputAll = Array.from(formElement.querySelectorAll("input"));
        formElement.addEventListener("submit", (e) => {
            e.preventDefault();
            btn.classList.add("rotate-[1000deg]")

            let errMessage = {};
            let data = {};
            let flag = inputAll.find(item => item.value == '');

            if (flag) {
                errMessage.name = isValidate(inputName, "Chưa nhập tên sản phẩm!");
                errMessage.sale = inputSale.value < 0 || inputSale.value > 100 ? "Chỉ giới hạn từ 1% - 99%" : '';
                errMessage.price = isValidate(inputPrice, "Chưa nhập giá sản phẩm!");
                errMessage.img = inputImage.files[0] ? '' : 'Chưa gửi ảnh!';
                errMessage.cate = isValidate(inputCate, "Chưa chọn danh mục sản phẩm!");
                errMessage.des = isValidate(inputDes, "Chưa nhập mô tả sản phẩm!");
                // console.log(inputImage.files[0]);
                // console.log(a++);
                // console.log(flag);
                setErr(errMessage);

            } else {
                console.log(1);
                // console.log(flag);
                // console.log("fet");
                const formData = new FormData;
                let sale = inputSale.inputSale == "" ? 0 : inputSale.value
                formData.append("file", inputImage.files[0]);
                formData.append("upload_preset", "n6ogapv9");

                // console.log(formData);

                axios.post("https://api.cloudinary.com/v1_1/djcimgjcc/image/upload", formData, {
                    headers: {
                        "Content-Type": "aplication/form-data"
                    }
                })
                    .then((res) => res.data)
                    .then((data) => data.url)
                    .then((url) => {
                        console.log(url);
                        return data = {
                            name: inputName.value,
                            des: inputDes.value,
                            category_id: inputCate.value,
                            sale: sale,
                            view: 0,
                            price: inputPrice.value,
                            img: url,
                            createAt: new Date()
                        }
                    })
                    .then((data) => add("products", data))
                    .then(() => swal("Thêm thành công!", "", "success"))
                    .then(() => {
                        errElement.map(item => item.innerText = "")
                        inputAll.map(item => item.value = "")
                        btn.classList.remove("rotate-[1000deg]")
                        console.log("done");

                    })
            }
        })
    })
    return /*html*/ `
            <div id="content" class=" transition-all ease-in-out   w-full">
                <div class=" w-full mt-24 ">
                <h1 class="text-3xl font-semibold  text-center  mb-10">Thêm mới danh mục</h1>
                <p class="text-green-900 noti"></p>
                    <form id="formAddProduct" >
                        <div class="flex gap-36 items-center">
                            <div>
                                <div>
                                    <label for="name" class="text-xl font-semibold mb-2">Tên sản phẩm:</label></br>
                                    <input placeholder="Nhập tên sản phẩm" class="border-2 p-3 w-full  border-black rounded-md focus:border-4 focus:border-gray-700" type="text" name="name" id="name">
                                    <p class="text-red-700 errElement">${err.name ?? ''}</p>
                                </div>

                                <div>
                                    <label for="sale" class="text-xl font-semibold mb-2">Giảm giá %:</label></br>
                                    <input placeholder="Nhập 1-99%" class="border-2 p-3 w-full  border-black rounded-md focus:border-4 focus:border-gray-700" type="text" name="sale" id="sale">
                                    <p class="text-red-700 errElement">${err.sale ?? ''}</p>
                                </div>

                                <div>
                                    <label for="price" class="text-xl font-semibold mb-2">Giá tiền:</label></br>
                                    <input placeholder="Nhập giá tiền" class="border-2 p-3 w-full  border-black rounded-md focus:border-4 focus:border-gray-700" type="text" name="price" id="price">
                                    <p class="text-red-700 errElement">${err.price ?? ''}</p>
                                </div>

                            </div>
                            <div>
                                <div>
                                        <label for="cate" class="text-xl font-semibold mb-2">Danh mục:</label></br>
                                        <select name="cate" id="cate">
                                            <option value="">---Chọn danh mục---</option>
                                            ${cates.map(item => {
        return `
                                                <option value="${item.id}">${item.name}</option>
                                                `
    }).join("")}
                                        </select>
                                        <p class="text-red-700 errElement">${err.cate ?? ''}</p>
                                </div>
                                <div>
                                    <label for="img" class="text-xl font-semibold mb-2">Ảnh sản phẩm:</label></br>
                                    <input placeholder="Nhập tên dnah mục" class="border-2 p-3 w-full  border-black rounded-md focus:border-4 focus:border-gray-700" type="file" name="img" id="img">
                                    <p class="text-red-700 errElement">${err.img ?? ''}</p>
                                </div>
                                <div>
                                    <label for="des" class="text-xl font-semibold mb-2">Mô tả:</label></br>
                                    <input placeholder="Nhập mô tả sản phẩm" class="border-2 p-3 w-full h-24  border-black rounded-md focus:border-4 focus:border-gray-700" type="text" name="des" id="des">
                                    <p class="text-red-700 errElement">${err.des ?? ''}</p>
                                </div>
                            </div>
                        </div>
                        <button class="bg-green-900 btn-submit my-10 rounded-md p-2 w-20 transition-all duration-700 text-white"><span class="hidden loadElement" ><i class="fa-solid fa-loader"></i></span><span class='textElement'>Thêm</span></button>
                    </form>
                </div>
                </div>
            </div>

    `
}


export default AddProduct;