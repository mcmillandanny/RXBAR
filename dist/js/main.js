"use strict";

console.log('RXBAR');

var hamburger = document.querySelector(".menu-lines");
var nav = document.querySelector(".closed-nav");

hamburger.addEventListener("click", function () {
    nav.classList.toggle('open-nav');
    console.log("clciked");
});
//# sourceMappingURL=main.js.map
