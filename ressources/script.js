const menuHamburger = document.querySelector(".hamburger_svg")
const navLinks = document.querySelector(".nav_all")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('light-menu')
})

const menuAccueil = document.querySelector(".nav-item-link")
menuAccueil.addEventListener('click',()=>{
navLinks.classList.toggle('light-menu')
})

const menuDesc = document.querySelector(".nav-item-desc")
menuDesc.addEventListener('click',()=>{
navLinks.classList.toggle('light-menu')
})

const menuDates = document.querySelector(".nav-item-dates")
menuDates.addEventListener('click',()=>{
navLinks.classList.toggle('light-menu')
})

const menuFaq = document.querySelector(".nav-item-faq")
menuFaq.addEventListener('click',()=>{
navLinks.classList.toggle('light-menu')
})

const menuInsc = document.querySelector(".nav-item-inscriptions")
menuInsc.addEventListener('click',()=>{
navLinks.classList.toggle('light-menu')
})