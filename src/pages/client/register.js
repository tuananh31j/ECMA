import { useEffect, useState } from "@/utilities";


const Register = () => {
    return `
            <div
            class="bg-[url('../../public/img/bnlogin.jpg')] relative min-h-screen w-full bg-no-repeat bg-cover">
            <div class="backdrop-blur-sm absolute inset-0 "></div>
            <div class="relative h-screen ">
                <div
                    class="w-[600px] px-10 py-3 box-content absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2   bg-white border rounded-md ">
                    <div>
                        <h1 class="text-center font-semibold text-xl mb-8">Đăng ký</h1>
                    </div>
                    <form action="">
                        <div class="flex gap-5">
                            <div class="">
                                <div class="h-[110px] mb-6">
                                    <lable for="name" class="w-full my-3">Họ tên <span
                                            class="text-red-700">*</span></lable>
                                    <input class="border-2 rounded-md my-3  p-4 w-full"
                                        placeholder="Nhập mật khẩu" type="text" name="name">
                                    <p class="text-red-700">Lỗi</p>
                                </div>
                                <div class="h-[110px] mb-6">
                                    <lable for="email" class="w-full">Địa chỉ email <span
                                            class="text-red-700">*</span></lable>
                                    <input class="border-2 rounded-md my-3  p-4 w-full"
                                        placeholder="Nhập địa chỉ email" type="email" name="email">
                                    <p class="text-red-700">Lỗi</p>
                                </div>

                            </div>
                            <div class="">
                                <div class="h-[110px] mb-6">
                                    <lable for="phone" class="w-full">Số điện thoại <span
                                            class="text-red-700">*</span></lable>
                                    <input class="border-2 rounded-md my-3  p-4 w-full"
                                        placeholder="Nhập số điện thoại" type="text" name="phone">
                                    <p class="text-red-700">Lỗi</p>
                                </div>
                                <div class="h-[110px] mb-6">
                                    <lable for="pass" class="w-full my-3">Mật khẩu <span
                                            class="text-red-700">*</span></lable>
                                    <input class="border-2 rounded-md my-3  p-4 w-full"
                                        placeholder="Nhập mật khẩu" type="password" name="pass">
                                    <p class="text-red-700">Lỗi</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1 justify-center">
                            <button type="submit"
                                class="bg-red-700 border-2 mb-3 border-red-700 rounded-md p-4 text-white font-semibold hover:opacity-80 active:translate-y-[2px] transition-all ease-in-out">Đăng
                                ký</button>
                            <a href="" class="text-center text-red-700 hover:underline">Đăng
                                nhập</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `
}

export default Register;