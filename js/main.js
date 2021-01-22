const toggle_btn = document.getElementById("toggle-btn");
const menu = document.getElementById("menu");
const header = document.getElementById("header");

toggle_btn.addEventListener("click", () => {
    menu.classList.toggle("active");
    header.classList.toggle("active");
});