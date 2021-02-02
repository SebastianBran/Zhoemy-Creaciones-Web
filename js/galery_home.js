let images = [
    "./assets/images/products/1.png",
    "./assets/images/products/2.png",
    "./assets/images/products/3.png",
    "./assets/images/products/4.png"
];

let img_position = 0;
let img_carousel = document.querySelector("#img-container");

window.onload = () => {
    img_carousel.style.backgroundImage = `url(${images[img_position]})`; //load initial image
    document.getElementById("text-info").textContent = `Producto ${img_position + 1}`;
}

document.getElementById("before-img").addEventListener("click", () => {
    img_position = (images.length + (img_position - 1) % images.length) % images.length;
    img_carousel.style.backgroundImage = `url(${images[img_position]})`;
    document.getElementById("text-info").textContent = `Producto ${img_position + 1}`;
}); 

document.getElementById("after-img").addEventListener("click", () => {
    img_position = (img_position + 1) % images.length;
    img_carousel.style.backgroundImage = `url(${images[img_position]})`;
    document.getElementById("text-info").textContent = `Producto ${img_position + 1}`;
});