// -------------------------------toggle icon navbar----------------------------/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("hide");
  navbar.classList.toggle("active");
};
