// icon active
const navbarnav = document.getElementById("nav-list");

console.log(navbarnav);
// ketika icon di klik
document.querySelector("#hamburger-menu").addEventListener("click", () => {
  navbarnav.classList.toggle("active");
});

// login
const formOpenBtn = document.querySelector("#open"),
  register = document.querySelector(".page-login"),
  formContainer = document.querySelector(".form-container"),
  closeBtn = document.querySelector(".close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login");

formOpenBtn.addEventListener("click", () => register.classList.add("show"));
closeBtn.addEventListener("click", () => register.classList.remove("show"));

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});
