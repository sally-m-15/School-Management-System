"use strict";

const toggleMenuButton = document.querySelector(".nav-toggle");
const menu = document.querySelector(".menu");

toggleMenuButton.addEventListener("click", () =>{
    menu.classList.toggle("active");
    toggleMenuButton.classList.toggle("is-icon")
});



