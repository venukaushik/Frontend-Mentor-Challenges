const menu = document.querySelector(".menu-open");
const navLink = document.querySelector(".nav-link");

menu.addEventListener("click", () => {
  menu.classList.toggle("menu-close");
  navLink.classList.toggle("show-menu");
  console.log(navLink.getAttribute("class"));
});
