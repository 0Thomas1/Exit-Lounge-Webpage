"use strict"
let linkArr = document.querySelectorAll(".navbar-nav a");

linkArr.forEach(link=>{
    link.addEventListener("click",()=>{
        document.querySelector(".navbar-collapse").collapse("hide");
    });
});