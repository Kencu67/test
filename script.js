const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu.nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});
