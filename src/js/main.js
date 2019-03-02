console.log('RXBAR')

let hamburger = document.querySelector(".menu-lines");
let nav = document.querySelector(".closed-nav")


hamburger.addEventListener("click", ()=> {
    nav.classList.toggle('open-nav');
    console.log("clciked");
})