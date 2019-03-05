console.log('RXBAR')

let hamburger = document.querySelector('.menu-lines');
let nav = document.querySelector('.closed-nav');
let closeBtn = document.querySelector('.close-btn');
let navAnimate = document.querySelector('.nav');
let shopNowBtn = document.querySelector('.shop-now-btn-home');
let squaresPage = document.querySelector('.squares-page');
let squares = document.querySelectorAll(".square");
let squareTextBoxes = document.querySelectorAll(".square-text");


hamburger.addEventListener("click", ()=> {

    TweenMax.fromTo(nav, .3, {
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

    TweenMax.to(nav, .3, {
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



shopNowBtn.addEventListener("click", () => {
    console.log("clicked");

    TweenMax.to(squaresPage, .4, {
        display: "flex",
        ease: Power1.easeIn,
    })

    TweenMax.to(".content", .3, {
        display: "none",
        opacity: 0
    })

    
})


let checkIndex = function(event) {
   
    let indexNo = Array.from(squares).indexOf(event.target);
    console.log('indexNo', indexNo)
    // console.log(indexNo,"square"); 

    // TweenMax.set(squares, {display: 'none'})
    TweenMax.set(squareTextBoxes, {display: 'none'})

    // TweenMax.to(squares[indexNo], 1, {
    //     display: "block"
    // })
    TweenMax.to(squareTextBoxes[indexNo], 1, {
        display: "block"
    })

}

let hideSquareTextBoxes = function() {
    console.log('hideSquareTextBoxes')
    TweenMax.set(squareTextBoxes, {display: 'none'})
}


squares.forEach(function(square) {
    square.addEventListener("mouseenter", checkIndex)
    square.addEventListener("mouseout", hideSquareTextBoxes)
});


// change page tweens

let bodyPage = document.querySelector('body');
let pinkMenubg = document.querySelector(".pink-menu-bg");
let blueMenubg = document.querySelector(".blue-menu-bg");
let eggsHome = document.querySelector(".eggs-home");
let eggsHomeBlue = document.querySelector(".eggs-home-blue");
let datesHome = document.querySelector(".dates-home");
let datesHomeBlue = document.querySelector(".dates-home-blue");
let peanutHome = document.querySelector(".peanut-home");
let cashewHome = document.querySelector(".cashews-home");
let cashewsText = document.querySelector(".cashews-text");
let peanutText = document.querySelector(".peanuts-text");
let pbBar = document.querySelector('.pb-bar-img');
let blueBerryBar = document.querySelector('.blueberry-bar-img');



let changePage = new TimelineMax({delay: 3});


changePage.fromTo(pinkMenubg, .5, {
    x: 0,
},
{
    x: 100,
    opacity: 0
}, "menudotswap")

changePage.to(bodyPage, .3, {
    backgroundColor: "#b9c4d2"
}, "menudotswap")

changePage.fromTo(blueMenubg, .3, {
    x: -120,
    y: -50,
    ease: Power3.easeIn,
},
{
    x: 0,
    y: 0
}, "menudotswap")

changePage.to(bodyPage, 1, {
    backgroundColor: "#b9c4d2"
}, "menudotswap")

changePage.to(eggsHome, .5, {
    x: -50,
    opacity: 0
}, "ingredient")

changePage.from(eggsHomeBlue, .5, {
    x: 50,
    opacity: 0
}, "ingredient")

changePage.to(datesHome, .5, {
    y: -50,
    opacity: 0
}, "ingredient+=0.2")

changePage.from(datesHomeBlue, .5 , {
    y: 50,
    opacity: 0
}, "ingredient+=0.2")



changePage.to(peanutHome, .5, {
    x: -50,
    opacity: 0
}, "ingredient+=0.2")

changePage.from(cashewHome, .5 , {
    x: 50,
    opacity: 0
}, "ingredient+=0.2")

changePage.to(peanutText, .5, {
    y: -50,
    opacity: 0
}, "ingredient+=0.2")

changePage.fromTo(cashewsText, .5 , {
    y: 0,
    opacity: 0,
    rotation: 0,
},
    {
        y: -20,
        opacity: 1,
        rotation: 15,
    },
"ingredient+=0.2")

changePage.to(pbBar, .5, {
    y: -50,
    opacity: 0
}, "bar")

changePage.from(blueBerryBar, .5 , {
    y: 50,
    opacity: 0
}, "bar")



console.log(squares)

squares.forEach(function(square, i) {

})