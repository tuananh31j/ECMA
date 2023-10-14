import { useEffect, useState } from "../../utilities";
import { $ } from "../../utilities";

const Dashboard = () => {


    return `
    <div id='menuButton'
    class="transition-all  duration-700 fixed left-[294px] me-4  top-[20px] rounded-md bg-red-800 z-50 p-4">
    <i class="fa-solid fa-angles-left text-white"></i>
</div>
    
   
            <div id="menuElement" class="   overflow-y-scroll overflow-x-visible duration-700 transition-all ease-in-out bg-red-700 fixed  h-full">
            
            <h2 class="text-center pe-3 mx-auto mb-4 font-semibold text-4xl">Hignland
                coffee</h2>

            <nav class="flex flex-col m-5 ">
                <ul>
                    <!-- user -->
                    <li>
                        <div class="flex gap-2  items-center">
                            <div class=" h-10 w-10">
                                <img src="https://picsum.photos/200/250"
                                    class="rounded-full object-cover  w-full h-full" alt="">

                            </div>
                            <div class="flex gap-11 items-center">
                                <div class="">
                                    <p class="m-0 text-white">
                                        nguyễn tuấn anh
                                    </p>
                                    <p class="font-light m-0 italic text-white">
                                        tuan@gmail.com
                                    </p>
                                </div>

                            </div>

                        </div>
                    </li>
                    <!-- Trang chủ -->
                    <a class="text-white   " href="/">
                        <li class="mt-4 hover:bg-amber-950 p-1 hover:text-white  hover:rounded-lg ">
                            <i class="hover:text-white fa-solid fa-house text-white"></i>
                            Trang chủ
                        </li>
                    </a>
                    <!-- điều khiển -->
                    <a class="text-white   " href="/admin/dashboard">
                        <li class="mt-3 hover:bg-amber-950 p-1 hover:text-white  hover:rounded-lg ">
                            <i class="hover:text-white fa-solid fa-gauge text-white"></i>
                            Thống kê
                        </li>
                    </a>
                    
                    <!-- Danh mục -->
                    <a class="text-white  " href="/admin/category">
                        <li class="mt-3 hover:bg-amber-950 p-1 hover:text-white  hover:rounded-lg">
                            <i class="hover:text-white fa-solid fa-hashtag text-white"></i>
                            Danh mục
                        </li>
                    </a>
                   
                    <!-- Sản phẩm -->
                    <a class="text-white  " href="/admin/product">
                        <li class="mt-3 hover:bg-amber-950 p-1 hover:text-white  hover:rounded-lg">
                            <i class="hover:text-white fa-solid fa-mug-saucer text-white"></i>
                            Sản phẩm
                        </li>
                    </a>
                    <!-- cửa hàng -->
                    <a class="text-white  " href="/admin/shop">
                        <li class="mt-3 hover:bg-amber-950 p-1 hover:text-white  hover:rounded-lg">
                            <i class="hover:text-white fa-solid fa-shop text-white"></i>
                            Cửa hàng
                        </li>
                    </a>
                    <!-- khách hàng -->
                    <a class="text-white  " href="/admin/customer">
                        <li class="mt-3 hover:bg-amber-950 p-1 hover:text-white  hover:rounded-lg">
                            <i class="hover:text-white fa-solid fa-people-group text-white"></i>
                            Khách hàng
                        </li>
                    </a>
                    
                    <!-- Banner -->
                    <a class="text-white  " href="/admin/banner">
                        <li class="mt-3 hover:bg-amber-950 p-1 hover:text-white  hover:rounded-lg">
                            <i class="hover:text-white fa-solid fa-mountain-sun"></i>
                            Banner
                        </li>
                    </a>
                    
                </ul>
            </nav>
           
        </div>
    `
}

export default Dashboard;



