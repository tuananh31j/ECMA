import { getAll } from "@/api";
import Banner from '@/components/banner';
import { useState, useEffect } from "@/utilities";
import Image from "@/asset";
import Classes from "@/components/style/main.module.css";
import { $ } from "../../utilities";
let user = localStorage.getItem("user") ?? null
const Header = () => {
    return `
            <header>
            <div class="bg-red-700 flex justify-between p-4 px-10 items-center">
                <div class="w-[248px] "><div class="w-20"><img src="${Image.logo}" alt=""></div></div>

                <div>
                    <form action="" method="post">
                        <div><input class="border-2 z-50 rounded-s-md  w-96 py-2 px-2"
                                type="text" name="" id="" placeholder="Tìm kiếm từ khóa" />
                            <button type="submit"
                                class="text-black p-2 z-10 border-2 w-20 ms-[-6px] border-white rounded-e-md bg-white"><i
                                    class="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                    </form>
                </div>

                ${user
            ? `
                        <div>
                            <div class="flex gap-4 items-center relative">
                                <span class="text-white italic overflow-hidden  w-50 h-6 ">Xin chào! Nguyễn Tuấn Anh</span>
                                <img src="https://picsum.photos/200/250" class="userElement w-10 h-10 border rounded-full"/>
                                <span class=" menuElement hidden absolute left-[77px]  w-40 h-48 top-4">
                                    <ul class="text-white   absolute left-10 top-6  bg-white  rounded-md p-4 w-32 h-40">
                                    <li class="hover:bg-slate-900 hover:text-white p-2 text-gray-900 rounded-md"><a href="/admin/dashboard">Admin</a></li>
                                    <li class="hover:bg-slate-900 hover:text-white p-2 text-gray-900 rounded-md"><button class="btn-logout">Đăng xuất</button></li>
                                    </ul>
                                </span>
                            </div>
               
                        </div>`
            : `
                        <div class="flex gap-4  w-[248px] justify-end">
                            <a href="/login" class="border-2 p-2 text-white rounded-md">Đăng nhập</a>
                            <a href="/register" class="border-2 p-2 text-white bg-slate-600 rounded-md">Đăngký</a>
                        </div>
                    `
        }
            </div>

            <nav>
            <ul class="flex justify-between px-5 my-3 items-center font-bold text-red-700">
            <li><a href="/"
                    class="hover:bg-amber-900 hover:text-white rounded-md p-2 flex items-center gap-4"><i
                        class="fa-solid fa-house"></i>
                    TRANG
                    CHỦ</a></li>
            <li><a href="/shop" class="hover:bg-amber-900 hover:text-white rounded-md p-2">CỬA
                    HÀNG</a></li>
           
            <li><a href="product" class="hover:bg-amber-900 hover:text-white rounded-md p-2">SẢN
                    PHẨM</a></li>
            <li><a href="contact" class="hover:bg-amber-900 hover:text-white rounded-md p-2">LIÊN
                    HỆ</a></li>
            <li><a href="about" class="hover:bg-amber-900 hover:text-white rounded-md p-2">GIỚI
                    THIỆU</a></li>
        </ul>
            </nav>

            
        </header>
    `
}


// {/* <div>
//                 <ul class="flex gap-2 p-5 text-red-700 underline">
//                     <li><a href="" class="">link/</a></li>
//                     <li><a href="" class="">link/</a></li>
//                     <li><a href="" class="">link/</a></li>
//                 </ul>
//             </div> */}


// <li>
// <div class="relative">
// <span id="cate" class="hover:bg-amber-900 hover:text-white rounded-md p-2">DANH
// MỤC</span>
// <span class=" menuCate hidden absolute left-[0px]  w-40 h-48 top-1">
// <ul class="text-white   absolute left-2 top-6  bg-white rounded-md p-4 w-32 h-40">

// ${cates.map(item => `<li class="hover:bg-slate-900 p-2 text-gray-800 rounded-md"><a href="/admin/dashboard">${item.name}</a></li>`)}
// </ul>
// </span>
// </div>
// </li>
export default Header;