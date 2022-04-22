const $email = document.querySelector(".emailInput");
const $password = document.querySelector(".passwordInput");
const $btn = document.querySelector(".btn");
const $container = document.querySelector(".error");

const base_url = "https://todo-itacademy.herokuapp.com/api";

function getRegister() {
  fetch(`${base_url}/login`, {
    method: "POST",
    body: JSON.stringify({
      email: $email.value,
      password: $password.value,
    }),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
}

$btn.addEventListener("click", (e) => {
  e.preventDefault();

  if ($email.value.length === 0 || $password.value.length === 0) {
    if ($email.value.length === 0) {
      $email.classList.add("active");
      setTimeout(() => window.location.reload(), 1500);
      $container.innerHTML = `<p>Заполните поля!</p>`;
    }
    if ($password.value.length === 0) {
      $password.classList.add("active");
      setTimeout(() => window.location.reload(), 1500);
      $container.innerHTML = `<p>Заполните поля!</p>`;
    }
  } else {
    getRegister();
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
  }
});
