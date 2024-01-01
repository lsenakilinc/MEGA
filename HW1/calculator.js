// "use strict";

// // Get all the number buttons and operators
// const buttons = document.querySelectorAll("button");
// const display = document.querySelector(".display");

// // event listeners for all buttons
// buttons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     const buttonText = event.target.innerText; //get the text content of the button that was clicked and stores it in buttonText.
    
//     //  number button click
//     if (!isNaN(parseInt(buttonText))) {
//       display.innerText += buttonText;
//     } // isNaN checks if it's not a number and ! negates the result.if buttonText is a number, the condition is false and the if block won't execute.
      
//     //  operator button click
    
//     else if (buttonText == "+" || buttonText == "-" || buttonText == "*" || buttonText == "/") {
//       display.innerText += " " + buttonText + " ";
//     }
//     //  equals button click
//     else if (buttonText === "=") {
      
//       const calculation = new Function('return ' + display.innerText);
//       display.innerText = calculation();
//     }
//     //  clear button click
//     else if (buttonText === "C") {
//       display.innerText = ""; // when C clicked it will shows us nothing. it will clear everything.
//     }
//   });
// });