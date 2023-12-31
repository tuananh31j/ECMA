import axios from "axios";
import { add, getAll } from "../../../api";
import { isValidate, useEffect, useState, $, $$ } from "@/utilities";

const AddCustomer = () => {
    const [err, setErr] = useState({})
    const [user, setUser] = useState([]);

    useEffect(() => {
        const formElement = $("#formAddCustomer");
        const inputName = $("#name");
        const inputEmail = $("#email");
        const inputPhone = $("#phone");
        const inputpass = $("#pass");
        const inputRole = [...$$("input[name='role']")];
        const inputImage = $("#img");
        const inputPass = $("#pass");
        const btn = $(".btn-submit");

        const errElement = Array.from($$(".errElement"));

        const inputAll = Array.from(formElement.querySelectorAll("input"));

        formElement.addEventListener("submit", (e) => {
            e.preventDefault();
            btn.classList.add("rotate-[1000deg]")

            let errMessage = {};
            let customer = {};
            let emailUnitd = user.find(item => item.email === inputEmail.value);
            let phoneUnitd = user.find(item => item.phone === inputPhone.value);
            if (inputName.value == "" || inputPass.value == "" || inputEmail.value == "" || emailUnitd || phoneUnitd || inputPhone == "") {
                errMessage.name = isValidate(inputName, "Chưa nhập tên người dùng!");
                errMessage.pass = isValidate(inputpass, "Chưa nhập mật khẩu người dùng!");
                if (inputEmail.value == "") {
                    errMessage.email = "Chưa nhập địa chỉ email";
                } else if (emailUnitd) {
                    errMessage.email = "Email tồn tại!";
                    console.log(emailUnitd);
                } else {
                    errMessage.email = "";
                }
                if (inputPhone.value == "") {
                    errMessage.phone = "Chưa nhập số điện thoại!";
                } else if (phoneUnitd) {
                    errMessage.phone = "Số điện thoại tồn tại!";

                } else {
                    errMessage.phone = "";
                }
                setErr(errMessage);
            } else {

                const role = inputRole.find((item) => item.checked)
                console.log(role.value);
                console.log(typeof inputRole);


                console.log('ffff');
                if (inputImage.files[0]) {
                    console.log(inputImage.files[0]);

                    const formData = new FormData;
                    formData.append("file", inputImage.files[0]);
                    formData.append("upload_preset", "n6ogapv9");
                    axios.post("https://api.cloudinary.com/v1_1/djcimgjcc/image/upload", formData, {
                        headers: {
                            "Content-Type": "aplication/form-data"
                        }
                    })
                        .then(({ data }) => {
                            console.log(data.url);
                            return customer = {
                                name: inputName.value,
                                email: inputEmail.value,
                                phone: inputPhone.value,
                                pass: inputPass.value,
                                img: data.url,
                                role: role.value,
                                createAt: new Date(),
                                updateAt: null
                            }
                        })
                        .then((cus) => add("customers", cus))
                        .then(() => swal("Thêm thành công!", "", "success"))
                        .then(() => {
                            inputAll.map(item => item.value = "")
                            btn.classList.remove("rotate-[1000deg]")
                            console.log("done");
                        })

                    console.log("sssss");


                } else {
                    console.log(inputImage.files[0]);

                    customer = {
                        name: inputName.value,
                        email: inputEmail.value,
                        phone: inputPhone.value,
                        pass: inputPass.value,
                        img: "http://res.cloudinary.com/djcimgjcc/image/upload/v1697091622/hltpfy4cll9ah2sd2pi4.png",
                        role: role.value,
                        createAt: new Date(),
                        updateAt: null
                    }
                    console.log("ttttt");
                    add("customers", customer)
                        .then(() => swal("Thêm thành công!", "", "success"))
                        .then(() => {
                            errElement.map(item => item.innerText = "")
                            inputAll.map(item => item.value = "")
                            btn.classList.remove("rotate-[1000deg]")
                            console.log("done");
                        })
                }

            }
        })
    })
    useEffect(() => {
        getAll("customers")
            .then(({ data }) => setUser(data));
    }, [])

    return /*html*/ `
            <div id="content" class=" transition-all ease-in-out   w-full">
                <div class=" w-full mt-24 ">
                <h1 class="text-3xl font-semibold  text-center  mb-10">Thêm mới người dùng</h1>
                <p class="text-green-900 noti"></p>
                    <form id="formAddCustomer" >
                        <div class=" gap-36 items-center">
                            <div>
                                <div>
                                    <label for="name" class="text-xl font-semibold mb-2">Tên người dùng:</label></br>
                                    <input placeholder="Nhập tên người dùng!" class="border-2 p-3 w-full  border-black rounded-md focus:border-4 focus:border-gray-700" type="text" name="name" id="name">
                                    <p class="text-red-700 errElement">${err.name ?? ''}</p>
                                </div>

                                <div>
                                    <label for="email" class="text-xl font-semibold mb-2">Email:</label></br>
                                    <input placeholder="Nhập địa chỉ email" class="border-2 p-3 w-full  border-black rounded-md focus:border-4 focus:border-gray-700" type="email" name="email" id="email">
                                    <p class="text-red-700 errElement">${err.email ?? ''}</p>
                                </div>
                                <div>
                                    <label for="phone" class="text-xl font-semibold mb-2">Điên thoại:</label></br>
                                    <input placeholder="Nhập số điện thoại" class="border-2 p-3 w-full  border-black rounded-md focus:border-4 focus:border-gray-700" type="text" name="phone" id="phone">
                                    <p class="text-red-700 errElement">${err.phone ?? ''}</p>
                                </div>
                                <div class="my-3">
                                    <label for="" class="text-xl font-semibold mb-2">Vai trò:</label></br>
                                    <div class="flex gap-8 items-center">
                                        <div class="flex gap-1 items-center">
                                            <label for="role" class="text-amber-950">Admin</label>
                                            <input  class="border-2 p-3 h-5 w-5  border-black rounded-md focus:border-4 focus:border-gray-700" type="radio"  name="role" value="1">
                                        </div>
                                        <div class="flex gap-1 items-center">
                                            <label for="role" class="text-green-900">user</label>
                                            <input checked class="border-2 p-3 h-5 w-5    border-black rounded-md focus:border-4 focus:border-gray-700" type="radio"  name="role" value="0">
                                        </div>
                                    </div>
                                    
                                </div>

                                <div>
                                    <label for="pass" class="text-xl font-semibold mb-2">Mật khẩu:</label></br>
                                    <input placeholder="Nhập mật khẩu" class="border-2 p-3 w-full  border-black rounded-md focus:border-4 focus:border-gray-700" type="password" name="pass" id="pass">
                                    <p class="text-red-700 errElement">${err.pass ?? ''}</p>
                                </div>

                                <div>
                                    <label for="img" class="text-xl font-semibold mb-2">Ảnh đại diện:</label></br>
                                    <input class="border-2 p-3 w-full  border-black rounded-md focus:border-4 focus:border-gray-700" type="file" name="img" id="img">
                                    <p class="text-red-700 errElement">${err.img ?? ''}</p>
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


export default AddCustomer;