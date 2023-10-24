const menuEl = document.querySelector(".menu-burger");
const navigationEl = document.querySelector(".navigation");

// Navigation
function toggleMenu() {
  console.log("Toggle");
  menuEl.classList.toggle("active");
  navigationEl.classList.toggle("active");
  console.log(menuEl.classList);
}
