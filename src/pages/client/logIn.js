import { render, useState, useEffect, router, $, $$, isValidate } from "@/utilities";
import { getAll } from "@/api";
import Image from "@/asset";
const Login = () => {
    const [err, setErr] = useState([]);
    useEffect(() => {
        const errMessage = {};
        let dataForm = {}

        const formLogin = $("#formLogin");
        const emailInput = $(".emailInput");
        const passInput = $(".passInput");
        const inputAll = Array.from(formLogin.querySelectorAll("input"));

        formLogin.addEventListener("submit", (e) => {
            e.preventDefault();
            const vali = inputAll.find(item => item.value == "");
            if (vali) {
                errMessage.email = isValidate(emailInput, "Chưa nhập địa chỉ email!");
                errMessage.pass = isValidate(passInput, "Chưa nhập mật khẩu!");
                setErr(errMessage);
            } else if (!vali) {
                getAll("customers")
                    .then((res) => res.data)
                    .then(data => data.find(user => user.email == emailInput.value && user.pass == passInput.value))
                    .then(user => {
                        if (user) {
                            dataForm = JSON.stringify(user);
                            localStorage.setItem("user", dataForm);
                            setErr({})
                            window.location.href = "/"
                        } else {
                            errMessage.email = user?.email == emailInput.value ? "" : "Địa chỉ email không trùng khớp!";
                            errMessage.pass = user?.pass == passInput.value ? "" : "Mật khẩu không đúng!";
                            setErr(errMessage);
                        }
                    })
            }
        })
    }, [err])
    return `
            <div
            class="bg-[url('http://res.cloudinary.com/djcimgjcc/image/upload/v1697165893/h0kbzymvapcqrmcvpmo8.jpg')] relative min-h-screen w-full bg-no-repeat bg-cover">
            <div class="backdrop-blur-[4px] absolute inset-0 "></div>
            <div class="relative h-screen ">
                <div
                    class="w-[280px] px-10 py-3 box-content absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2   bg-white border rounded-md ">
                    <div>
                        <h1 class="text-center font-semibold text-xl mb-8">Đăng nhập</h1>
                    </div>
                    <form id="formLogin" action="">
                        <div class="h-[110px] mb-6">
                            <lable for="email" class="w-full">Địa chỉ email <span
                                    class="text-red-700">*</span></lable>
                            <input class="border-2 rounded-md my-3 emailInput  p-4 w-full"
                                placeholder="Nhập địa chỉ email" type="email" name="email">
                            <p class="text-red-700">${err.email ?? ""}</p>
                        </div>
                        <div class="h-[110px] mb-6">
                            <lable for="pass" class="w-full my-3">Mật khẩu <span
                                    class="text-red-700">*</span></lable>
                            <input class="border-2 rounded-md my-3 passInput  p-4 w-full"
                                placeholder="Nhập mật khẩu" type="password" name="pass">
                            <p class="text-red-700">${err.pass ?? ""}</p>
                        </div>
                        <div class="flex flex-col gap-1 justify-center">
                            <button 
                                class="bg-red-700 border-2 mb-3 border-red-700 rounded-md p-4 text-white font-semibold hover:opacity-80 active:translate-y-[2px] transition-all ease-in-out">Đăng
                                nhập</button>
                            <a href="" class="text-center text-red-700 hover:underline">Quên mật
                                khẩu?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `
}
export default Login;