import ItemProduct from "../../components/product/item";
import { get, getAll } from "@/api";
import { useEffect, useState } from "@/utilities";
import Banner from "@/components/banner";
import { ListProNew } from "../../components/product";
import Image from "../../asset";
import Classes from "@/components/style/main.module.css"
import { $$ } from "../../utilities";


const ProductPage = () => {
    const [banner, setBanner] = useState([]);
    const [products, setProducts] = useState([])
    const [categorys, setCategorys] = useState([])


    useEffect(() => {
        getAll("products")
            .then(res => res.data)
            .then(data => data.sort((a, b) => b.id - a.id))
            .then(result => setProducts(result.splice(0, 8)))
    }, [])

    useEffect(() => {
        (async () => {
            const response = await getAll("banners");
            const bannerData = response.data.find(item => item.menu == 1);
            setBanner(bannerData);
        })()
    }, [])

    useEffect(() => {
        getAll("categorys")
            .then(({ data }) => setCategorys(data))
    }, [])


    useEffect(() => {
        const btnCates = Array.from($$(".btnCate"));
        btnCates.map(item => {
            item.addEventListener("click", (e) => {
                console.log("e");
                const id = e.target.dataset.cate;
                console.log(id);
                getAll(`products?category_id=${id}`)
                    .then(({ data }) => setProducts(data))
            })
        })

    })
    console.log(products);
    return `
    <div class="main-content">
    <!-- banner -->
    ${Banner(banner)}
    
    <!-- products -->
    <div class="px-10 my-20">
    <h1 class="text-3xl my-10 font-bold">Sản phẩm của chúng tôi</h1>

        <div class="${Classes.pro} ">
        <div><h2 class="text-xl font-bold">Danh mục sản phẩm</h2>
            <ul>
                ${categorys.map(item => `<li><button  class="btnCate p-3 hover:border-2 h-16 w-16 hover:border-red-700 rounded-md" data-cate="${item.id}">${item.name}</button></li>`).join("")}
                
            </ul>
        </div>
        
        <div>${ListProNew(products)}</div>
        </div>
    </div>
    
</div>
    `

}

export default ProductPage;

