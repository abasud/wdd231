const hambutton = document.querySelector("#hamButton");
const nav = document.querySelector("#animate");

hambutton.addEventListener("click", function() {
    nav.classList.toggle("show");
    hambutton.classList.toggle("show");
});