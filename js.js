const form = document.querySelector("#form");
const quality = document.querySelector("#quality");
const product = document.querySelector("#product");
const kind = document.querySelector("#kind");
const price = document.querySelector("#price");

const qualityErr = document.querySelector("#qualityErr");
const productErr = document.querySelector("#productErr");
const kindErr = document.querySelector("#kindErr");
const priceErr = document.querySelector("#priceErr");
const shipPrice = document.querySelector("#shipPrice");

const inside = document.querySelector("#inside");
const outside = document.querySelector("#outside");

const cartElement = document.querySelector("#cart");
const noti = document.querySelector("#noti");


const datas = [];




const handleShipRemove = () => {
    ship.classList.remove('hidden')
}
const handleShipShow = () => {
    ship.classList.add('hidden')
}
inside.addEventListener("click", handleShipShow)
outside.addEventListener("click", handleShipRemove)

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputChecked = document.querySelector("input[name='address']:checked");

    let errors = {};
    let data = {};
    let quality1 = Number(quality.value.trim());
    console.log(Number.isInteger(quality1))
    if (product.value.trim() == "") {
        errors.product = "Chưa nhập tên sản phẩm!";
    }

    if (quality.value.trim() == "") {
        errors.quality = "Chưa nhập số lượng!";
    }
    if (isNaN(quality.value.trim()) || !Number.isInteger(quality1)) {
        errors.quality = "Giá trị phải là số nguyên!";
    }

    if (isNaN(price.value.trim())) {
        errors.price = "Giá trị phải là số!";
    }

    if (kind.value.trim() == "") {
        errors.kind = "Chưa chọn loại!";
    }

    if (price.value.trim() == "") {
        errors.price = "Chưa nhập giá tiền!";
    }

    if (price.value.trim() < 0) {
        errors.price = "Giá trị phải lớn hơn 0!";
    }
    if (quality.value.trim() < 0) {
        errors.quality = "Giá trị phải lớn hơn 0!";
    }


    function checkErr(obj) {
        for (let item in obj) {
            if (obj.hasOwnProperty(item)) {
                return false
            }
            return true
        }
    }
    if (!checkErr(errors)) {
        qualityErr.innerText = errors.quality ? errors.quality : "";

        productErr.innerText = errors.product ? errors.product : "";

        kindErr.innerText = errors.kind ? errors.kind : "";

        priceErr.innerText = errors.price ? errors.price : "";
        noti.innerHTML = "<p class='text-red-600'>Lỗi!</p>"

    }
    if (Object.keys(errors).length == 0) {
        let ship = (inputChecked.value == 0) ? 0 : shipPrice.value;
        data = {
            quality: quality.value.trim(),
            product: product.value.trim(),
            kind: kind.value,
            price: price.value.trim(),
            ship: ship,
            address: inputChecked.value
        }
        datas.unshift(data);
        noti.innerHTML = "<p class='text-green-600'>Đặt hàng thành công!</p>"

    }
    let dataElement = '';
    if (datas.length != '') {
        dataElement = datas.map(item => {
            return `
    <div class="flex gap-44 bg-slate-600 border-2 rounded-xl text-white p-4">
                    <div>
                        <div>
                            <span>Sản phẩm:</span>
                            <span class="italic">${item.product}</span>
                        </div>
                        <div>
                            <span>Số lượng: </span>
                            <span class="italic">${item.quality}</span>
                        </div>
                        <div>
                            <span>Loại:</span>
                            <span class="italic">${item.kind}</span>
                        </div>
                        <div>
                            <span>Đơn giá:</span>
                            <span class="italic">${item.price}</span>
                        </div>
                    </div>
                    <div>
                        <div>
                            <span>Nơi nhận hàng:</span>
                            <span class="italic  text-green-600">${item.address == 0 ? "Nội thành" : "Ngoại thành"}</span>
                        </div>
                        <div>
                            <span>Phí vận chuyển:</span>
                            <span class="italic">${item.ship}</span>
                        </div>
                        <div>
                            <span>Tổng tiền</span>
                            <span class="italic">${Number(item.price) + Number(item.ship)}</span>
                        </div>
                    </div>
                </div>
    `
        }).join("");
    }

    cartElement.innerHTML = dataElement;
})





