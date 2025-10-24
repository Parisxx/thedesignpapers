function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
  const arrow = document.querySelector("#nav-links svg");
  const navLinks = document.getElementById("nav-links");

  if (arrow) {
    arrow.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  }
});