import axios from "axios";
import { add, get, getAll, update } from "../../../api";
import { isValidate, useEffect, useState } from "../../../utilities";
import { $, $$ } from "@/utilities"

const UpdateProduct = (id) => {
    const [err, setErr] = useState({})
    const [cates, setCategorys] = useState([]);
    const [product, setProduct] = useState({});

    useEffect(() => {
        const formElement = $("#formUpdateProduct");
        const inputName = $("#name");
        const inputSale = $("#sale");
        const inputPrice = $("#price");
        const inputCate = $("#cate");
        const inputImage = $("#img");
        const inputDes = $("#des");
        const btn = $(".btn-submit");

        const errElement = Array.from($$(".errElement"));

        const inputAll = Array.from(formElement.querySelectorAll("input"));
        formElement.addEventListener("submit", (e) => {
            e.preventDefault();
            btn.classList.add("rotate-[1000deg]")

            let errMessage = {};
            let dataPro = {};
            let flag = inputAll.filter(item => item.value == '');

            if (flag.length > 1) {
                errMessage.name = isValidate(inputName, "Chưa nhập tên sản phẩm!");
                errMessage.sale = inputSale.value < 0 || inputSale.value > 100 ? "Chỉ giới hạn từ 1% - 99%" : '';
                errMessage.price = isValidate(inputPrice, "Chưa nhập giá sản phẩm!");
                errMessage.cate = isValidate(inputCate, "Chưa chọn danh mục sản phẩm!");
                errMessage.des = isValidate(inputDes, "Chưa nhập mô tả sản phẩm!");
                setErr(errMessage);
            } else {
                console.log(1);
                const formData = new FormData;
                let sale = inputSale.inputSale == "" ? 0 : inputSale.value

                formData.append("file", inputImage.files[0]);
                formData.append("upload_preset", "n6ogapv9");

                (async () => {
                    if (inputImage.files[0]) {
                        const { data } = await axios.post("https://api.cloudinary.com/v1_1/djcimgjcc/image/upload", formData, {
                            headers: {
                                "Content-Type": "aplication/form-data"
                            }
                        })
                        dataPro = {
                            id: product.id,
                            name: inputName.value,
                            des: inputDes.value,
                            category_id: inputCate.value,
                            sale: sale,
                            view: 0,
                            price: inputPrice.value,
                            img: data.url,
                            createAt: new Date()
                        }
                        update("products", dataPro)
                            .then(() => swal("Thêm thành công!", "", "success"))
                            .then(() => {
                                errElement.map(item => item.innerText = "")
                                inputAll.map(item => item.value = "")
                                btn.classList.remove("rotate-[1000deg]")
                                console.log("done");

                            })
                    } else {
                        dataPro = {
                            id: product.id,
                            name: inputName.value,
                            des: inputDes.value,
                            category_id: inputCate.value,
                            sale: sale,
                            view: 0,
                            price: inputPrice.value,
                            img: product.img,
                            createAt: new Date()
                        }
                        update("products", dataPro)
                            .then(() => swal("Cập nhật thành công!", "", "success"))
                            .then(() => {
                                errElement.map(item => item.innerText = "")
                                btn.classList.remove("rotate-[1000deg]")
                                console.log("done");

                            })
                    }

                })()
            }
        })
    })
    useEffect(() => {
        getAll("categorys")
            .then(({ data }) => setCategorys(data))
    }, [])
    useEffect(() => {
        get("products", id)
            .then(({ data }) => setProduct(data))
    }, [])

    return /*html*/ `
            <div id="content" class=" transition-all ease-in-out   w-full">
                <div class=" w-full mt-24 ">
                <h1 class="text-3xl font-semibold  text-center  mb-10">Chỉnh sửa sản phẩm</h1>
                <div>
                    <img class="h-44 w-44 object-cover" src="${product.img}" alt="">
                </div>
                <p class="text-green-900 noti"></p>
                    <form id="formUpdateProduct" >
                        <div class="flex gap-36 items-center">
                            <div>
                                <div>
                                    <label for="name" class="text-xl font-semibold mb-2">Tên sản phẩm:</label></br>
                                    <input placeholder="Nhập tên sản phẩm" value="${product.name}" class="border-2 p-3 w-full  border-black rounded-md focus:border-4 focus:border-gray-700" type="text" name="name" id="name">
                                    <p class="text-red-700 errElement">${err.name ?? ''}</p>
                                </div>

                                <div>
                                    <label for="sale" class="text-xl font-semibold mb-2">Giảm giá %:</label></br>
                                    <input value="${product.sale}" placeholder="Nhập 1-99%" class="border-2 p-3 w-full  border-black rounded-md focus:border-4 focus:border-gray-700" type="text" name="sale" id="sale">
                                    <p class="text-red-700 errElement">${err.sale ?? ''}</p>
                                </div>

                                <div>
                                    <label for="price" class="text-xl font-semibold mb-2">Giá tiền:</label></br>
                                    <input value="${product.price}" placeholder="Nhập giá tiền" class="border-2 p-3 w-full  border-black rounded-md focus:border-4 focus:border-gray-700" type="text" name="price" id="price">
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
                                                <option ${product.category_id == item.id ? "selected" : ""} value="${item.id}">${item.name}</option>
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
                                    <input placeholder="Nhập mô tả sản phẩm" value="${product.des}" class="border-2 p-3 w-full h-24  border-black rounded-md focus:border-4 focus:border-gray-700" type="text" name="des" id="des">
                                    <p class="text-red-700 errElement">${err.des ?? ''}</p>
                                </div>
                            </div>
                        </div>
                        <button class="bg-green-900 btn-submit my-10 rounded-md p-2 w-20 transition-all duration-700 text-white"><span class="hidden loadElement" ><i class="fa-solid fa-loader"></i></span><span class='textElement'>Cập nhật</span></button>
                    </form>
                </div>
                </div>
            </div>

    `
}


export default UpdateProduct;