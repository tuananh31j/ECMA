import ItemProduct from "../../components/product/item";
import { get, getAll } from "@/api";
import { useEffect, useState } from "@/utilities";
import Banner from "@/components/banner";
import { ListPro } from "../../components/product";
import Image from "../../asset";


const HomePage = () => {
    const [banner, setBanner] = useState([]);
    const [products, setProducts] = useState([])
    useEffect(() => {
        getAll("products?_limit=8")
            .then(res => res.data)
            .then(data => data.sort((a, b) => b.id - a.id))
            .then(result => setProducts(result))
    }, [])

    useEffect(() => {
        (async () => {
            const response = await getAll("banners");
            const bannerData = response.data.find(item => item.menu == 1);
            setBanner(bannerData);
        })()
    }, [])
    console.log(products, 'pri');
    console.log(banner, 'bn');



    console.log(products);
    return `
    <div class="main-content">
    <!-- banner -->
    ${Banner(banner)}
    <!-- dịch vụ -->
    <div class="flex  justify-between px-5 my-5">
        <div class="text-center w-56">
            <img class="mx-auto my-4" src="${Image.tk}" alt="" class="">
            <h4 class="font-semibold text-xl">Mua hàng siêu
                tiết kiệm</h4>
            <p class="mt-1 font-light text-sm">Các sản phẩm luôn được bán với giá ưu đãi nhất
            </p>
        </div>

        <div class="text-center w-56">
            <img class="mx-auto my-4" src="${Image.km}" alt="" class="">
            <h4 class="font-semibold text-xl">Khuyến mãi cực
                lớn</h4>
            <p class="mt-1 font-light text-sm">Được hưởng chương trình và các khuyến mãi cực
                lớn</p>
        </div>

        <div class="text-center w-56">
            <img class="mx-auto my-4" src="${Image.cl}" alt="" class="">
            <h4 class="font-semibold text-xl">Chất lượng</h4>
            <p class="mt-1 font-light text-sm">Nguyên liệu đảm bảo vệ sinh an toàn vệ sinh thực
                phẩm</p>
        </div>

        <div class="text-center w-56">
            <img class="mx-auto my-4" src="${Image.tt}" alt="" class="">
            <h4 class="font-semibold text-xl">Thanh toán dễ
                dàng</h4>
            <p class="mt-1 font-light text-sm">Trả tiền khi nhận hàng <br><span>(COD)</span>
            </p>
        </div>
    </div>

    <!-- products -->
    <!-- new -->
    <div class="px-10 my-20">
    <h1 class="text-3xl my-10 font-bold">Sản phẩm mới nhất</h1>
    ${ListPro(products)}
    </div>
</div>
    `

}

export default HomePage;

