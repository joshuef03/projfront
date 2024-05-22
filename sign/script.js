
const info_btn = document.getElementsByClassName("info-btn")
for (let i = 0; i < info_btn.length; i++) {
  info_btn[i].onclick = () => {
    document.querySelector(".container").classList.toggle("log-in");
  };
}

document.addEventListener('DOMContentLoaded', () => {
  const loginButton = document.querySelector('.log-in .btn');
  const signupButton = document.querySelector('.sign-up .btn');

  loginButton.addEventListener('click', (event) => {
    event.preventDefault();
    validateLoginForm();
  });

  signupButton.addEventListener('click', (event) => {
    event.preventDefault();
    validateSignupForm();
  });

  function validateLoginForm() {
    const username = document.querySelector('.log-in input[name="Username"]');
    const password = document.querySelector('.log-in input[name="Password"]');
    let valid = true;

    if (!username.value.trim()) {
      alert('El campo de Nombre de Usuario es obligatorio');
      valid = false;
    }

    if (!password.value.trim()) {
      alert('El campo de Contraseña es obligatorio');
      valid = false;
    }

    if (valid) {
      alert('Login successful');
      // Here you can proceed with form submission
    }
  }

  function validateSignupForm() {
    const email = document.querySelector('.sign-up input[name="email"]');
    const fullName = document.querySelector('.sign-up input[name="fullName"]');
    const username = document.querySelector('.sign-up input[name="Username"]');
    const password = document.querySelector('.sign-up input[name="Password"]');
    let valid = true;

    if (!email.value.trim()) {
      alert('El campo de Correo Electronico es obligatorio');
      valid = false;
    } else if (!validateEmail(email.value.trim())) {
      alert('Por favor, ingrese un correo electronico válido');
      valid = false;
    }

    if (!fullName.value.trim()) {
      alert('El campo de Nombre Completo es obligatorio');
      valid = false;
    }

    if (!username.value.trim()) {
      alert('El campo de Nombre de Usuario es obligatorio');
      valid = false;
    }

    if (!password.value.trim()) {
      alert('El campo de Contraseña es obligatorio');
      valid = false;
    }

    if (valid) {
      alert('Signup successful');
      // Here you can proceed with form submission
    }
  }

  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
});
