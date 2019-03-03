console.log('RXBAR')

let hamburger = document.querySelector(".menu-lines");
let nav = document.querySelector(".closed-nav");
let closeBtn = document.querySelector('.close-btn');
let navAnimate = document.querySelector('.nav');


hamburger.addEventListener("click", ()=> {

    TweenMax.fromTo(nav, .7, {
        width: "0%",
        height: "0%",
        x: 30,
        y: 30,
        borderRadius: 100,

    }, 
    {
        borderRadius: 0,
        width: "100%",
        height: "100%",
        x: 0,
        y: 0,
        display: "block"
    })

    TweenMax.fromTo(navAnimate, 2.3, {
        opacity: 0,
    },
    {
        opacity: 1
    })

    TweenMax.to(closeBtn, .1, {
        opacity: 1
    })
})

closeBtn.addEventListener("click", () => {
    console.log('clicked');

    TweenMax.to(nav, .7, {
        width: "0%",
        height: "0%",
        x: 60,
        y: 40,
        borderRadius: 100,
        display: "none"
    })

    TweenMax.to(navAnimate, .1, {
        opacity: 0
    })

    TweenMax.to(closeBtn, .1, {
        opacity: 0
    })



})