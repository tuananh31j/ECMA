import Image from "../../asset";
const Footer = () => {
    return `
        <footer class="my-11 px-10">
        <hr>
        <div class="flex justify-between my-4 container">
            <div class="w-60 leading-7">
                <h2 class="font-semibold mb-3">HAI LẦN COFFEE CPG</h2>
                <p class="">Hai Lần coffee là dự án của sinh viên trường cao đẳng thực hành FPT
                    polytechnic</p>
                <img class="mt-3" src="${Image.logo}" alt="">
            </div>

            <div class="w-60 leading-7">
                <h2 class="font-semibold mb-3">THÔNG TIN CÔNG TY</h2>
                <p>
                    FPT phố Trịnh Văn Bô, Xuân Phương, Nam Từ Liêm, Hà Nội
                </p>
                <p>Số điện thoại: 0123456789</p>
                <p>hailan@gmail.com</p>
            </div>

            <div class="w-36 leading-8">
                <h2 class="font-semibold mb-3">MENU</h2>
                <ul class=" leading-8">
                    <li><a href="">TRANG CHỦ</a></li>
                    <li><a href="">CỬA HÀNG</a></li>
                    <li><a href="">SẢN PHẨM</a></li>
                    <li><a href="">LIÊN HỆ</a></li>
                    <li><a href="">GIỚI THIỆU</a></li>
                </ul>

            </div>

            <!-- chăm sóc khách hàng -->
            <div>
                <h2 class="font-semibold mb-3">TỔNG ĐÀI HỖ TRỢ</h2>
                <div class="flex gap-4 items-center">
                    <div class="text-4xl">
                        <i class="fa-solid fa-phone-volume"></i>
                    </div>
                    <div class="leading-8">
                        <p>Lỗi sản phẩm: <span>019999999</span></p>
                        <p>Mua hàng: <span>018888888</span></p>
                        <p>hailan@gmail.com</p>
                    </div>
                </div>
                <div class="mt-5">
                    <h3 class="text-md font-semibold">FOLLOW US</h3>
                    <div>
                        <span class="me-1"><i class="fa-brands fa-facebook-f"></i></span>
                        <span class="mx-1"><i class="fa-brands fa-twitter"></i></span>
                        <span class="mx-1"><i class="fa-brands fa-youtube"></i></span>
                        <span class="ms-1"><i class="fa-brands fa-square-instagram"></i></span>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    </footer>
    `
}

export default Footer;