import { getAll } from "../../api";
import Banner from "../../components/banner";
import { useState } from "../../utilities";
import { useEffect } from "../../utilities/hook";
const ContactPage = () => {
    const [banner, setBanner] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await getAll("banners");
            const bannerData = response.data.find(item => item.menu == 3);
            setBanner(bannerData);
        })()
    }, [])
    return `
    <div class="main-content container my-5">
    ${Banner(banner)}
    <main class="px-5 my-5">

        <div class="row gap-3">
            <div class="col tw-leading-7">
                <p class="text-secondary">Hailen Coffee CPG tự hào là nhà phân phối hợp lệ và độc quyền cho tất
                    cả các
                    sản
                    phẩm mang thương hiệu Highlands Coffee. Mọi thông tin liên hệ xin gửi vào form dưới đây
                    hoặc liên hệ chúng tôi theo địa chỉ.</p>
                <div class="tw-leading-9">
                    <p>Địa chỉ:<span> Trịnh Văn Bô, Xuân Phương, Nam Từ Liêm, Tp. Hà Nội</span></p>
                    <p>Điện thoại: <span>012345678</span></p>
                    <p>Email: <span>Hailen@gmail.com</span></p>
                </div>
            </div>
            
        </div>
    </main>
</div>
    `;
}

export default ContactPage;

