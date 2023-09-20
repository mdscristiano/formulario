const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    checkForm();




})
email.addEventListener("blur", () => {
    checkInputEmail();
})


username.addEventListener("blur", () => {
    checkInputUsername();
})

function checkInputUsername() {

    const usernameValue = username.value;
    if (usernameValue === "") {
        erroInput(username, "Prencha o nome do usuario...")
    } else {
        const formItem = username.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPassoword() {
    const passwordValue = password.value;

    if (passwordValue === "") {
        erroInput(password, "A senha e obrigatória.")
    } else if (passwordValue.length < 8) {
        erroInput(password, "A senha precisa ter no mínino 8 caracteres...")

    } else {
        const formItem = password.parentElement;
        formItem.className = "form-content"
    }

}

function checkInputEmail() {
    const emailValue = email.value;
    if (emailValue === "") {
        erroInput(email, "O email e obrigatório...")
    } else {
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }


}
function checkInputPassowordConfirmation() {
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if (passwordConfirmationValue === "") {
        erroInput(passwordConfirmation, " A confirmação de senha é obrigatória...")
    } else if (passwordConfirmationValue !== passwordValue) {
        erroInput(passwordConfirmation, "As senhas não são iguais...")
    } else {
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content"



    }
}
function checkForm() {
    checkInputUsername();
    checkInputEmail();
    checkInputPassoword();
    checkInputPassowordConfirmation();

    const formItem = form.querySelectorAll(".form-content")
    const isValid = [...formItem];
    console.log(isValid);

    if (isValid) {

        alert("CADASTRADO COM SUCESSO!")

    }


}


function erroInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")
    textMessage.innerText = message;
    formItem.className = "form-content error"
}