const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');
const phone = document.getElementById("phone");





function validateEmail(value) {
    var input = document.createElement('input');

    input.type = 'email';
    input.required = true;
    input.value = value;

    return typeof input.checkValidity === 'function' ? input.checkValidity() : /\S+@\S+\.\S+/.test(value);
}

function error(input, message) {
    input.className = "form-control is-invalid";
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = "invalid-feedback";
}

function success(input) {
    input.className = "form-control is-valid";
};

function checkRequired(inputs) {

    inputs.forEach(function (input) {
        if (input.value === "") {
            error(input, ` ${input.id} is required!`);
        } else {
            success(input);
        }


    });
}

function checkLength(input, min, max) {

    if (input.value.length < min) {
        error(input, `${input.id} en az ${min} karakter olmalıdır`);
    } else if (input.value.length > max) {
        error(input, `${input.id} en fazla ${max} karakter olmalıdır`)
    } else {
        success(input);
    }
};

function checkPassword(pass, repass) {

    if (pass !== repass) {
        error(repass, "Passwords don't match!");
    }
}

function checkPhone(input) {

    var exp = /^\d{10}$/;
    if (!exp.test(input.value)) {
        error(input, "Phone number is invalid!")
    }
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    checkRequired([username, email, password, repassword, phone]);
    checkLength(username, 7, 15);
    checkPassword(password, repassword);
    checkPhone(phone);

    isvalid = validateEmail(email);
    if (isvalid) {
        success(email);
    } else if (email.value !== "") {
        error(email, "email format is invalid!")
    }

});