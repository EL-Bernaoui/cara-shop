// Burger Button
const toggleBtn = document.querySelector("header .icons .toggle");
const closeBtn = document.querySelector("header nav ul .close-btn");
const nav = document.querySelector("header nav");

toggleBtn.addEventListener("click", () => {
    nav.classList.add("active");
});
closeBtn.addEventListener("click", () => {
    nav.classList.remove("active");
});

// Paginations 
const paginationLis = document.querySelectorAll(".pagination ul li a");

paginationLis.forEach((li) => {
    li.addEventListener("click", (e) => {
        paginationLis.forEach((li) => {
            li.classList.remove("active");
        });
        e.target.classList.add("active");
    });
});

// Gallery 
let myImg = document.querySelector(".p-details .big-img img");
let imgs = document.querySelectorAll(".p-details .small-imgs img");

imgs.forEach((img) => {
    img.addEventListener("click", (e) => {
        myImg.src = e.target.src;
    });
})











