const Banner = (data) => {
    return `
    <!-- banner -->
            <div>
                <img src="${data.img_url}" class="w-full h-[500px] object-contain" alt="">
            </div>
    `
}

export default Banner;