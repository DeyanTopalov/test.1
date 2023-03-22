// ! so we want the background to change based on the 2 colors 
//! we have picked on the page and then to gives us the 
//! colors in css style on the bottom in <h3>

// var css = document.querySelector("h3");

// var color1 = document.querySelectorAll("input")[0];
// var color2 = document.querySelectorAll("input")[1];
//* that's one way of doing it, the other is by giving them class
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.querySelector("#gradient");
//* let's test with the console
// console.log(css);
// console.log(color1);
// console.log(color2);
//? this works

//* what we want to happen? > we want to listen to an event when we notice
//* the user have picked a color - we use "input" event
//* so we want to have an event listener for color1


// color1.addEventListener("input", function(){
//     console.log(color1.value);
// })
// color2.addEventListener("input", function(){
//     console.log(color2.value);
// })
//? this works

//* if we inspect the page we see that the background is in the body tag
//* so this should be our first clue of what should be changed
//? let's add a var for body
//? let's test it:
// console.log(body);
//? it works
//* how can we change to color of the body?
// body.style.background = "red";
//* ok so now we now how can we impact the color of the body, let's
//* update the functions a bit 

// color1.addEventListener("input", function(){
//     body.style.background = 
//     "linear-gradient(to right, "
//      + color1.value
//       +", " 
//       + color2.value + ")"; // just get used to this syntax for linear
// })
// color2.addEventListener("input", function(){
//     body.style.background = 
//     "linear-gradient(to right, "
//     + color1.value
//      +", " 
//      + color2.value + ")";
// })

//? Ok this works, but let's optimize it 

// function applyColor () {
//     body.style.background = 
//     "linear-gradient(to right, "
//     + color1.value
//      +", " 
//      + color2.value + ")";
// }

//* updated
// color1.addEventListener("input", applyColor());
// color2.addEventListener("input", applyColor());
//? not working - ?!?!? Oh wait - the event gets trigger on input
//? so we do not need the brackets to call applyColor functions

// color1.addEventListener("input", applyColor);
// color2.addEventListener("input", applyColor);
//? and now all works
//* btw instead of those 2 functions with eventListener we could
//* have added "onClick" or "oninput" directly in the HTML
//* but due to separation of concerns our way is better

//* so now the only thing left to do is to add the CSS at the bottom
//* we just need to add to our applyColor function a simple syntax
//? "css.textContent = body.style.background + ";"; "

// function applyColor () {
//     body.style.background = 
//     "linear-gradient(to right, "
//     + color1.value
//      +", " 
//      + color2.value + ")";
//      css.textContent = body.style.background + ";";
// }

//! the final js code looks is: 

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("#gradient");

function applyColor () {
    body.style.background = 
    "linear-gradient(to right, "
    + color1.value
     +", " 
     + color2.value + ")";
     css.textContent = body.style.background + ";";
}

color1.addEventListener("input", applyColor);
color2.addEventListener("input", applyColor);

//! Extra exercise

//* (1) Write code so that the colour inputs match the background 
//* generated on the first page load. 

//* (2) Display the initial CSS linear gradient property on page load.

//* (3) BONUS: Add a random button which generates two random 
//* numbers for the colour inputs.