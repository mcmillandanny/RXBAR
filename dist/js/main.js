'use strict';

console.log('RXBAR');

var hamburger = document.querySelector('.menu-lines');
var nav = document.querySelector('.closed-nav');
var closeBtn = document.querySelector('.close-btn');
var navAnimate = document.querySelector('.nav');
var shopNowBtn = document.querySelector('.shop-now-btn-home');
var squaresPage = document.querySelector('.squares-page');
var squares = document.querySelectorAll(".square");
var squareTextBoxes = document.querySelectorAll(".square-text");
var headerLogo = document.querySelector(".header-logo");

headerLogo.addEventListener('click', function () {

    TweenMax.to(squaresPage, .4, {
        display: "none"
    });

    TweenMax.to(".content", .3, {
        display: "flex",
        ease: Power1.easeIn,
        opacity: 1

    });
});

hamburger.addEventListener("click", function () {

    TweenMax.fromTo(nav, .3, {
        width: "0%",
        height: "0%",
        x: 30,
        y: 30,
        borderRadius: 100

    }, {
        borderRadius: 0,
        width: "100%",
        height: "100%",
        x: 0,
        y: 0,
        display: "block"
    });

    TweenMax.fromTo(navAnimate, 2.3, {
        opacity: 0
    }, {
        opacity: 1
    });

    TweenMax.to(closeBtn, .1, {
        opacity: 1
    });
});

closeBtn.addEventListener("click", function () {
    console.log('clicked');

    TweenMax.to(nav, .3, {
        width: "0%",
        height: "0%",
        x: 60,
        y: 40,
        borderRadius: 100,
        display: "none"
    });

    TweenMax.to(navAnimate, .1, {
        opacity: 0
    });

    TweenMax.to(closeBtn, .1, {
        opacity: 0
    });
});

shopNowBtn.addEventListener("click", function () {
    console.log("clicked");

    TweenMax.to(squaresPage, .4, {
        display: "flex",
        ease: Power1.easeIn
    });

    TweenMax.to(".content", .3, {
        display: "none",
        opacity: 0
    });
});

var checkIndex = function checkIndex(event) {

    var indexNo = Array.from(squares).indexOf(event.target);
    console.log('indexNo', indexNo);
    // console.log(indexNo,"square"); 

    // TweenMax.set(squares, {display: 'none'})
    TweenMax.set(squareTextBoxes, { display: 'none' });

    // TweenMax.to(squares[indexNo], 1, {
    //     display: "block"
    // })
    TweenMax.to(squareTextBoxes[indexNo], 1, {
        display: "block"
    });
};

var hideSquareTextBoxes = function hideSquareTextBoxes() {
    console.log('hideSquareTextBoxes');
    TweenMax.set(squareTextBoxes, { display: 'none' });
};

squares.forEach(function (square) {
    square.addEventListener("mouseenter", checkIndex);
    square.addEventListener("mouseout", hideSquareTextBoxes);
});

// change page tweens

var bodyPage = document.querySelector('body');
var pinkMenubg = document.querySelector(".pink-menu-bg");
var blueMenubg = document.querySelector(".blue-menu-bg");
var eggsHome = document.querySelector(".eggs-home");
var eggsHomeBlue = document.querySelector(".eggs-home-blue");
var datesHome = document.querySelector(".dates-home");
var datesHomeBlue = document.querySelector(".dates-home-blue");
var peanutHome = document.querySelector(".peanut-home");
var cashewHome = document.querySelector(".cashews-home");
var cashewsText = document.querySelector(".cashews-text");
var peanutText = document.querySelector(".peanuts-text");
var pbBar = document.querySelector('.pb-bar-img');
var blueBerryBar = document.querySelector('.blueberry-bar-img');

var changePage = new TimelineMax({ delay: 5, yoyo: true, repeat: -1 });

changePage.fromTo(pinkMenubg, .5, {
    x: 0
}, {
    x: 100,
    opacity: 0
}, "menudotswap");

changePage.to(bodyPage, .3, {
    backgroundColor: "#b9c4d2"
}, "menudotswap");

changePage.fromTo(blueMenubg, .3, {
    x: -120,
    y: -50,
    ease: Power3.easeIn
}, {
    x: 0,
    y: 0
}, "menudotswap");

changePage.to(bodyPage, 1, {
    backgroundColor: "#b9c4d2"
}, "menudotswap");

changePage.to(eggsHome, .5, {
    x: -50,
    opacity: 0
}, "ingredient");

changePage.from(eggsHomeBlue, .5, {
    x: 50,
    opacity: 0
}, "ingredient");

changePage.to(datesHome, .5, {
    y: -50,
    opacity: 0
}, "ingredient+=0.2");

changePage.from(datesHomeBlue, .5, {
    y: 50,
    opacity: 0
}, "ingredient+=0.2");

changePage.to(peanutHome, .5, {
    x: -50,
    opacity: 0
}, "ingredient+=0.2");

changePage.from(cashewHome, .5, {
    x: 50,
    opacity: 0
}, "ingredient+=0.2");

changePage.to(peanutText, .5, {
    y: -50,
    opacity: 0
}, "ingredient+=0.2");

changePage.fromTo(cashewsText, .5, {
    y: 0,
    opacity: 0,
    rotation: 0
}, {
    y: -20,
    opacity: 1,
    rotation: 15
}, "ingredient+=0.2");

changePage.to(pbBar, .5, {
    y: -50,
    opacity: 0
}, "bar");

changePage.from(blueBerryBar, .5, {
    y: 50,
    opacity: 0
}, "bar");
//# sourceMappingURL=main.js.map
