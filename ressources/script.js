const menuHamburger = document.querySelector(".hamburger_svg")
const navLinks = document.querySelector(".nav_all")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('light-menu')
})