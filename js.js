const formAdd = document.querySelector("#formAdd");
const product = document.querySelector("#product");
const productErr = document.querySelector("#productErr");
const idPro = document.querySelector("#id");
const idErr = document.querySelector("#idErr");
const supplier = document.querySelector("#supplier");
const supplierErr = document.querySelector("#supplierErr");
const quality = document.querySelector("#quality");
const quanlityErr = document.querySelector("#quanlityErr");
const statusElement = document.querySelector("#status");
const statusErr = document.querySelector("#statusErr");
const price = document.querySelector("#price");
const priceErr = document.querySelector("#priceErr");
const btnAdd = document.querySelector("#btnAdd");

const datas = [];

formAdd.addEventListener("submit", (e) => {
    e.preventDefault()
    const err = {};
    let data = {};
    const checkErr = (obj) => {
        for (let item in ojb) {
            if (ojb.hasOwnProperty(item)) {
                return false;
            }
            return true;
        }
    }

    if (product.value.trim() === "") {
        err.product = "Chưa nhập tên sản phẩm!";
    }
    if (product.value.trim().length >= 5) {
        err.product = "Sản phẩm tối thiểu 5 kí tự!";
    }
    if (idPro.value.trim() === "") {
        err.id = "Chưa nhập mã sản phẩm";
    }
    if (supplier.value.trim() === "") {
        err.supplier = "Chưa chọn nhà cung cấp!";
    }
    if (quality.value.trim() === "") {
        err.quality = "Chưa nhập số lượng sản phẩm";
    }

    if (price.value.trim() === "") {
        err.price = "Chưa nhập giá sản phẩm!";
    }

    if (statusElement.value.trim() === "") {
        err.statusElement = "Chưa chọn trạng thái";
    }

    if (!checkErr(err)) {
        productErr.innerText = err.product || "";
        idErr.innerText = err.idPro || "";
        supplierErr.innerText = err.supplier || "";
        qualityErr.innerText = err.quality || "";
        priceErr.innerText = err.price || "";
        statusErr.innerText = err.statusElement || "";
    } else {
        data = {
            product: product.value.trim(),
            idPro: idPro.value.trim(),
            supplier: supplier.value.trim(),
            quality: quality.value.trim(),
            price: price.value.trim(),
            status: statusElement.value.trim(),
        };
        datas.unShift(data);
    }
})

document.querySelector("#pro").innerHTML = datas.map(item => item.product)

