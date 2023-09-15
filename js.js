const root = document.querySelector("#root");
const userErr = document.querySelector("#userErr");
const passErr = document.querySelector("#passErr");
const form = document.querySelector("#form");
const user = document.querySelector("#user");
const pass = document.querySelector("#pass");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let err = {};
    let checkErr = (ojb) => {
        for (let item in ojb) {
            if (ojb.hasOwnProperty(item)) {
                return true;
            }
            return false;
        }
    }

    if (user.value.trim() == "") {
        err.userErr = "Chưa nhập tên người dùng!";
    }
    if (pass.value.trim() == "") {
        err.passErr = "Chưa nhập mật khẩu!";
    }

    if (checkErr) {
        userErr.innerHTML = err.userErr ? err.userErr : '';
        passErr.innerHTML = err.passErr ? err.passErr : '';
    } else {

    }
})