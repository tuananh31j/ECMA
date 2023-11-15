import { getAll } from "../../api";
import Banner from "../../components/banner";
import { useState } from "../../utilities";
import { useEffect } from "../../utilities/hook";
const AboutPage = () => {
    const [banner, setBanner] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await getAll("banners");
            const bannerData = response.data.find(item => item.menu == 4);
            setBanner(bannerData);
        })()
    }, [])
    return `
    
    `;
}

export default AboutPage;

