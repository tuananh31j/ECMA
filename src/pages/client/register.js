import { useEffect, useState } from "@/utilities";
import { add } from "@/api";
import { $, $$, isValidate } from "@/utilities/core";
import { router } from "@/utilities";
import Image from "@/asset";
import { getAll } from "../../api";


const Register = () => {
    const [err, setErr] = useState([]);
    useEffect(async () => {
        const btn = $(".btn-submit");
        const user = $(".userName");
        const emailInput = $(".emailName");
        const pass = $(".pass");
        const phoneInput = $("#phone");
        const registerForm = $("#register");
        const inputAll = registerForm.querySelectorAll("input");

        const errMessage = {};
        let dataForm = {};
        let { data } = await getAll("customers")
        console.log(data, 'ff');

        registerForm.addEventListener("submit", (e) => {
            e.preventDefault();



            let arrInputAll = Array.from(inputAll);
            let vali = arrInputAll.find(element => element.value === '');

            let emailUnitd = data.find(item => item.email === emailInput.value);
            let phoneUnitd = data.find(item => item.phone === phoneInput.value);
            console.log(data);
            if (vali || emailUnitd || phoneUnitd) {

                errMessage.name = isValidate(user, "Chưa điền họ tên!");
                errMessage.pass = isValidate(pass, "Chưa điền mật khẩu!");
                errMessage.phone = isValidate(phoneInput, "Chưa điền số điện thoại!");
                if (emailInput.value == "") {
                    errMessage.email = "Chưa nhập địa chỉ email";
                } else if (emailUnitd) {
                    errMessage.email = "Email tồn tại!";
                    console.log(emailUnitd);
                } else {
                    errMessage.email = "";
                }
                if (phoneInput.value == "") {
                    errMessage.phone = "Chưa nhập số điện thoại!";
                } else if (phoneUnitd) {
                    errMessage.phone = "Số điện thoại tồn tại!";

                } else {
                    errMessage.phone = "";
                }
                setErr(errMessage);
                console.log('vali');


            } else {
                console.log("object");
                dataForm = {
                    name: user.value,
                    email: emailInput.value,
                    phone: phoneInput.value,
                    pass: pass.value,
                    role: 0,
                    createAt: new Date(),
                    img: "http://res.cloudinary.com/djcimgjcc/image/upload/v1697091622/hltpfy4cll9ah2sd2pi4.png",
                    updateAt: null
                }
                console.log("object");

                add("customers", dataForm)
                    .then(() => swal("Đăng ký thành công!", "", "success"))

            }

        })
    }, [err])

    return `
            <div
            class="bg-[url('http://res.cloudinary.com/djcimgjcc/image/upload/v1697166021/uxkoyydgghajfp6nfu7n.jpg')] relative min-h-screen w-full bg-no-repeat bg-cover">
            <div class="backdrop-blur-sm absolute inset-0 "></div>
            <div class="relative h-screen ">
                <div
                    class="w-[600px] px-10 py-3 box-content absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2   bg-white border rounded-md ">
                    <div>
                        <h1 class="text-center font-semibold text-2xl mb-10">Đăng ký</h1>
                    </div>
                    <form id="register">
                        <div class="flex gap-5">
                            <div class="">
                                <div class="h-[110px] mb-6">
                                    <lable for="name" class="w-full my-3">Họ tên <span
                                            class="text-red-700">*</span></lable>
                                    <input class="userName border-2 rounded-md my-3  p-4 w-full"
                                        placeholder="Nhập họ tên" type="text" name="name">
                                    <p class="text-red-700">${err.name ?? ""}</p>
                                </div>
                                <div class="h-[110px] mb-6">
                                    <lable for="email" class="w-full">Địa chỉ email <span
                                            class="text-red-700">*</span></lable>
                                    <input class="emailName border-2 rounded-md my-3  p-4 w-full"
                                        placeholder="Nhập địa chỉ email" type="email" name="email">
                                    <p class="text-red-700">${err.email ?? ""}</p>
                                </div>

                            </div>
                            <div class="">
                                <div class="h-[110px] mb-6">
                                    <lable for="phone" class="w-full">Số điện thoại <span
                                            class="text-red-700">*</span></lable>
                                    <input id="phone" class=" border-2 rounded-md my-3  p-4 w-full"
                                        placeholder="Nhập số điện thoại" type="text" name="phone">
                                    <p class="text-red-700">${err.phone ?? ""}</p>
                                </div>
                                <div class="h-[110px] mb-6">
                                    <lable for="pass" class="w-full my-3">Mật khẩu <span
                                            class="text-red-700">*</span></lable>
                                    <input class="pass border-2 rounded-md my-3  p-4 w-full"
                                        placeholder="Nhập mật khẩu" type="password" name="pass">
                                    <p class="text-red-700">${err.pass ?? ""}</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1 justify-center">
                            <button 
                                class="btn-submit bg-red-700 border-2 mb-7 border-red-700 rounded-md p-4 text-white font-semibold hover:opacity-80 active:opacity-100 active:translate-y-[2px] transition-all ease-in-out">Đăng
                                ký</button>
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `
}


// <a href="" class="text-center text-red-700 hover:underline">Đăng
//                                 nhập</a>

export default Register;

