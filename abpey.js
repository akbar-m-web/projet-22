const hamburgerIcon = document.querySelector(".hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const crossIcon = document.querySelector(".cross-icon");
  

hamburgerIcon.addEventListener("click", function (){
    hamburgerMenu.classList.add("hamburger-menu-show");

});
crossIcon.addEventListener("click", function (){
    hamburgerMenu.classList.remove("hamburger-menu-show")
})


