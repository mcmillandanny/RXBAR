'use strict';

console.log('RXBAR');

var hamburger = document.querySelector('.menu-lines');
var nav = document.querySelector('.closed-nav');
var closeBtn = document.querySelector('.close-btn');
var navAnimate = document.querySelector('.nav');
var shopNowBtn = document.querySelector('.shop-now-btn-home');
var squaresPage = document.querySelector('.squares-page');
var squares = document.querySelectorAll(".square");

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

squares.forEach(function (square) {
    square.addEventListener("click", checkIndex);
});

function checkIndex(event) {

    var indexNo = Array.from(squares).indexOf(event.target);
    // console.log(indexNo,"square"); 
    if (indexNo === 0) {
        console.log("THIS IS 0");
        TweenMax.to(".square1-text", 1, {
            display: "block"
        });
    }
    if (indexNo === 1) {
        TweenMax.to(".square2-text", 1, {
            display: "block"
        });

        TweenMax.to(".square1-text", .1, {
            display: "none"
        });
        console.log('this is 1!');
    }
}
//# sourceMappingURL=main.js.map
