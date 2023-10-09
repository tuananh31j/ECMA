import { getAll } from "@/api";
import Banner from '@/components/banner';
import { useState, useEffect } from "@/utilities";
let user = localStorage.getItem("user") ?? null
const Header = () => {
    const [log, setLog] = useState(false);
    useEffect(() => {
        if (localStorage.getItem("user")) {
            setLog(true)
        }
    }, [])
    return `
            <header>
            <div class="bg-red-700 flex justify-between p-4 px-10 items-center">
                <div class="w-[248px] "><div class="w-20"><img src="./img/logo.png" alt=""></div></div>

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
                            <div class="flex gap-4 items-center">
                                <span class="text-white italic overflow-hidden  w-50 h-6 ">Xin chào! Nguyễn Tuấn Anh</span>
                                <a href="/admin/dashboard">Admin</a>
                                <img src="https://picsum.photos/200/250" class="w-10 h-10 border rounded-full"/>
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
            <li><a href="/category" class="hover:bg-amber-900 hover:text-white rounded-md p-2">DANH
                    MỤC</a></li>
            <li><a href="product" class="hover:bg-amber-900 hover:text-white rounded-md p-2">SẢN
                    PHẨM</a></li>
            <li><a href="contact" class="hover:bg-amber-900 hover:text-white rounded-md p-2">LIÊN
                    HỆ</a></li>
            <li><a href="about" class="hover:bg-amber-900 hover:text-white rounded-md p-2">GIỚI
                    THIỆU</a></li>
        </ul>
            </nav>

            <div>
                <ul class="flex gap-2 p-5 text-red-700 underline">
                    <li><a href="" class="">link/</a></li>
                    <li><a href="" class="">link/</a></li>
                    <li><a href="" class="">link/</a></li>
                </ul>
            </div>
        </header>
    `
}

export default Header;