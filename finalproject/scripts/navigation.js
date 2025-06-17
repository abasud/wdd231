const nav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", function() {
    nav.classList.toggle("show");
    hambutton.classList.toggle("show");
});