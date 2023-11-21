
const btnSignIn = document.getElementById("sign-in"),
    btnSignUp = document.getElementById("sign-up"),
    formRegister = document.querySelector(".register"),
    formLogin = document.querySelector(".login");

const registerForm = document.querySelector(".register .form");
const loginForm = document.querySelector(".login .form");

btnSignIn.addEventListener("click", e => {
    formRegister.classList.add("hide");
    formLogin.classList.remove("hide");
});

btnSignUp.addEventListener("click", e => {
    formLogin.classList.add("hide");
    formRegister.classList.remove("hide");
});

registerForm.addEventListener("submit", e => {
    e.preventDefault(); 

    // hago la validación del registro detectando si estan los campos llenos o vacíos
    const fullName = registerForm.querySelector('input[placeholder="Nombre Completo"]').value;
    const email = registerForm.querySelector('input[placeholder="Correo Electronico"]').value;
    const password = registerForm.querySelector('input[placeholder="Contraseña"]').value;

    if (fullName && email && password) {
        alert("Registro exitoso");
        window.location.href = "index.html";
        // pongo mis datos y con window me redirecciona la pagina principal
    } else {
        alert("Por favor, completa todos los campos del formulario.");
    }
});

loginForm.addEventListener("submit", e => {
    e.preventDefault(); // Prevent the default form submission

    // hago la validación del inicio de sesión detectando si estan los campos llenos o vacíos
    const email = loginForm.querySelector('input[placeholder="Correo Electronico"]').value;
    const password = loginForm.querySelector('input[placeholder="Contraseña"]').value;

    if (email && password) {
        alert("Inicio de sesión exitoso");
        window.location.href = "index.html";
        // pongo mis datos y con window me redirecciona la pagina principal
    } else {
        alert("Por favor, completa todos los campos del formulario.");
    }
});
