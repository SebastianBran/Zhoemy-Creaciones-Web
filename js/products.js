class Product {
    constructor(name_product, id_image, url_image) {
        this.name_product = name_product;
        this.id_image = id_image;
        this.url_image = url_image;
    }
    
    load_Ui() {
        let index = `
            <div class="item-gallery">
                <div class="img-container" id="${this.id_image}"></div>
                <div id="img-info"> 
                    <p id="text-info">${this.name_product}</p>
                </div>
            </div>
        `;

        document.querySelector("#container-gallery").innerHTML += index;

        let item = document.querySelector(`#${this.id_image}`);
        item.style.backgroundImage = `url(${this.url_image})`;
    }
}

let products = [
    new Product("Prenda 1", "p1", "../assets/images/products/1.png"),
    new Product("Prenda 2", "p2", "../assets/images/products/2.png"),
    new Product("Prenda 3", "p3", "../assets/images/products/3.png"),
    new Product("Prenda 4", "p4", "../assets/images/products/4.png"),
    new Product("Prenda 5", "p5", "../assets/images/products/5.png"),
    new Product("Prenda 6", "p6", "../assets/images/products/6.png"),
    new Product("Prenda 7", "p7", "../assets/images/products/7.png"),
    new Product("Prenda 8", "p8", "../assets/images/products/8.png"),
    new Product("Prenda 9", "p9", "../assets/images/products/9.png"),
    new Product("Prenda 10", "p10", "../assets/images/products/10.png"),
    new Product("Prenda 11", "p11", "../assets/images/products/11.png"),
    new Product("Prenda 12", "p12", "../assets/images/products/12.png")
];

/* load UI of product */
for(let i = 0; i < products.length; i++) {
    products[i].load_Ui();
}

/* expand the image selected */
let elements = document.querySelectorAll(".img-container");

elements.forEach(element => {
    let url = element.style.backgroundImage.toString();

    element.addEventListener("click", () => {
        let image_expand_container = document.getElementById("image-expand-container");

        document.querySelector("body").style.overflow = "hidden"; /* block the scroll in the page */

        document.getElementById("image-expand").classList.toggle("active");
        document.getElementById("image-expand-bg").classList.toggle("active");
        document.getElementById("image-expand-close").classList.toggle("active");
        image_expand_container.classList.toggle("active");

        image_expand_container.style.backgroundImage = `url(${url.slice(5, url.length - 2)})`;
    });
});

/* close the expand image */
document.querySelector(".fas").addEventListener("click", () => {
    document.querySelector("body").style.overflow = "visible";

    document.getElementById("image-expand").classList.toggle("active");
    document.getElementById("image-expand-bg").classList.toggle("active");
    document.getElementById("image-expand-close").classList.toggle("active");
    document.getElementById("image-expand-container").classList.toggle("active");
});