var menu = document.querySelector(".menu");

let menuItems = document.getElementsByClassName("menu-items")[0];
let line1 = document.querySelector(".line1");
let line2 = document.querySelector(".line2");
let line3 = document.querySelector(".line3");
menu.addEventListener("click", () => {
  menuItems.classList.toggle("active");
});

menu.addEventListener("click", () => {
  line1.classList.toggle("active");
  line2.classList.toggle("active");
  line3.classList.toggle("active");
});
