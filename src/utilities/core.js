const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

//validate
const isValidate = (input, errMessage) => {
    if (input.value == '') {
        return errMessage;
    }

}

export { $, $$, isValidate };