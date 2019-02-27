'use strict';

console.log('RXBAR');

var ingredientsImages = document.querySelectorAll('.showing-class');
var currentImgIndex = 0;

// setInterval(() => {
//     // animateTextInOut()

//     let hideShowingText = function() {
//         TweenMax.to( ingredientsImages[currentImgIndex], 0.3, { 
//             display: "none", 
//             opacity: 0,
//             x: 30,
//         })
//     }

//     let showNewText = function() {
//         TweenMax.fromTo( ingredientsImages[currentImgIndex], 0.3, {
//             display: "none", 
//             opacity: 0,
//             x: -30,
//             y: 0
//         }, { 
//             display: "block", 
//             opacity: 1,
//             x: 0,
//             y: 0
//          })

//     }   

//     let next = function() {
//         hideShowingText()
//         currentImgIndex++
//         if (currentImgIndex === ingredientsImages.length) {
// 			currentImgIndex = 0;
// 		}
// 		showNewText()
//     }
//     next()
// }, 1000)
//# sourceMappingURL=main.js.map
