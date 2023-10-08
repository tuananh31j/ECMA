import { get } from "@/api";
import { useEffect, useState } from "@/utilities";

const ProDetailPage = ({ id }) => {
    const [pro, setPro] = useState({});
    console.log(id);
    useEffect(() => {
        get("products", id)
            .then((res) => res.data)
            .then(data => { console.log(data, "s"); setPro(data) })
    }, [pro])
    console.log(pro);
    return /*html*/ `
            <div>
                <div>
                    gahg
                <img src="${pro.img}" alt="">
                </div>
            </div>
    `
}

export default ProDetailPage;