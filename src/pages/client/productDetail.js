import { get } from "@/api";
import { useEffect, useState } from "@/utilities";
import Classes from "@/components/style/main.module.css";
import Image from "../../asset";


const ProDetailPage = (id) => {
    const [pro, setPro] = useState({});
    console.log(id, "id");
    useEffect(() => {
        get("products", id)
            .then((res) => res.data)
            .then(data => { console.log(data, "s"); setPro(data) })
    }, [])
    console.log(pro);
    return /*html*/ `
            <div class="px-5 my-5  " >
                <div class="${Classes.item__detail} justify-evenly items-center">
                    <div class="w-full">
                        <img class="w-full h-full object-cover" src="${Image.test}" alt="">
                    </div>
                    <div class="">
                        <h2 class="font-semibold text-3xl">${pro.name}</h2>
                        <div class="flex justify-between my-3 font-light">
                        <p>Lượt xem: ${pro.view}</p>
                            <p>Mã sản phẩm: ${pro.id}</p>
                        </div>
                    </div>
                </div>
            </div>
    `
}

export default ProDetailPage;