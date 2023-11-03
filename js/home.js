// icon active
const navbarnav = document.getElementById("nav-list");

console.log(navbarnav);
// ketika icon di klik
document.querySelector("#hamburger-menu").addEventListener("click", () => {
  navbarnav.classList.toggle("active");
});
