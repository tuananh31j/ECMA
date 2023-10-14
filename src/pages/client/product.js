import ItemProduct from "../../components/product/item";
import { get, getAll } from "@/api";
import { useEffect, useState } from "@/utilities";
import Banner from "@/components/banner";
import { ListPro } from "../../components/product";
import Image from "../../asset";
import Classes from "@/components/style/main.module.css"
import { $$ } from "../../utilities";


const ProductPage = () => {
    const [banner, setBanner] = useState([]);
    const [products, setProducts] = useState([])
    const [categorys, setCategorys] = useState([])
    const [pages, setPages] = useState([])

    useEffect(() => {
        getAll("products")
            .then(res => res.data)
            .then(result => Math.ceil(result.length / 8))
            .then(page => {
                let pagesElement = [];
                console.log(page, "dd");
                for (let i = 1; i <= page; i++) {
                    pagesElement = [...pagesElement, `<li><button data-id='${i}' class="btn-page border-2 border-red-700  bg-white w-8 h-8">${i}</button></li>`]
                }
                return pagesElement;
            })
            .then(pageEl => setPages(pageEl))
    }, [])
    useEffect(() => {
        getAll(`products?_page=1&_limit=8`)
            .then(({ data }) => setProducts(data))
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
                    .then(({ data }) => {
                        return Math.ceil(data.length / 8);
                    })
                    .then(page => {
                        let pagesElement = [];
                        console.log(page, "dd");
                        for (let i = 1; i <= page; i++) {
                            pagesElement = [...pagesElement, `<li><button data-id='${i}' data-tt='${id}' class="btn-page border-2 border-red-700  bg-white w-8 h-8">${i}</button></li>`]
                        }
                        return pagesElement;
                    })
                    .then(pageEl => setPages(pageEl))
                    .then(() => getAll(`products?category_id=${id}&_limit=8`))
                    .then(({ data }) => setProducts(data))
            })
        })

    })
    useEffect(() => {
        const btnPage = [...$$(".btn-page")];
        btnPage.map(item => {
            item.addEventListener("click", (e) => {
                const pageNumber = e.target.dataset.id;
                const cateNumber = e.target.dataset.tt;
                console.log(cateNumber, "dc");
                if (cateNumber) {
                    getAll(`products?category_id=${cateNumber}&_page=${pageNumber}&_limit=8`)
                        .then(({ data }) => setProducts(data))
                } else {
                    getAll(`products?_page=${pageNumber}&_limit=8`)
                        .then(({ data }) => setProducts(data))
                }

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
                    ${categorys.map(item => `<li><button  class="btnCate p-3 hover:border-2 h-16 w-24 hover:border-red-700 rounded-md" data-cate="${item.id}">${item.name}</button></li>`).join("")}
                    
                </ul>
            </div>
            
            <div class="flex flex-col">
                ${ListPro(products)}
            </div>
            <ul class="flex gap-3 my-16 mx-auto justify-center">
            
            ${pages.map(item => item).join("")}
            
        </ul>
        </div>
    </div>
    
</div>
    `

}

export default ProductPage;

