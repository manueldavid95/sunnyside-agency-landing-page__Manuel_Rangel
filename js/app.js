let navbar_list = document.querySelector(".navbar_list");
let menu_icon = document.querySelector(".menu_icon");

menu_icon.addEventListener("click", () => {
    navbar_list.classList.toggle("active")
})