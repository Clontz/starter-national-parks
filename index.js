// const buttons = document.querySelectorAll("button");
// console.log(buttons);

// const descriptions = document.querySelectorAll(".description-display");
// for (let desc of descriptions.values()) {
//     let content = desc.innerText;
    
//     if(content.length > 250){
//         content = content.slice(0, 250);
//         content = content + '<a href="#">...</a>';
//     }

//     desc.innerHTML = content;

//     console.log(content);
// }

// const ratings = document.querySelectorAll(".rating-display .value");

// for (let rating of ratings) {
//     let ratingValue = parseFloat(rating.innerText);

//     if(ratingValue > 4.7) {
//         // rating.style.fontWeight = "bold";
//         // rating.style.color = "#3ba17c";
//         rating.classList.add("high-rating");
//         rating.classList.remove("value");
//     }
// }

// const parks = document.querySelectorAll(".park-display");

// const numberParks = parks.length;

// const newElement = document.createElement("div");
// newElement.innerText = `${numberParks} exciting parks to visit`;
// newElement.classList.add("header-statement");

// const header = document.querySelector("header");
// header.appendChild(newElement;);

/////////////////////////////////////////////////
//// **REMOVING DOM ELEMENTS**///////////////////
/////////////////////////////////////////////////

// Get the parent element of all parks
// const main = document.querySelector("main");

// // Select a single park
// const park = main.querySelector(".park-display");

// // Remove that park
// main.removeChild(park);

//////////////////////////////////////////////////
//// **EVENT LISTENERS** /////////////////////////
//////////////////////////////////////////////////

// const firstBtn = document.querySelector(".rate-button");

// firstBtn.addEventListener("click", (event) => {
//     console.log("You clicked the button", event);
// });

//// Select all the buttons for all the parks
 const allBtns = document.querySelectorAll(".rate-button");

//// Iterate through the list of buttons and add an event handler to each
// allBtns.forEach((btn) => {
//   btn.addEventListener("click", (event) => {
//     console.log(event.target);
//   });
// });

//// Logging the parent node associated with the clicked button
// allBtns.forEach((btn) => {
//     btn.addEventListener("click", (event) => {
//       console.log(event.target.parentNode);
//     });
//   });

// Assigning variable to the parent node, 
// then manipulating the values of that variable (bg color)
// allBtns.forEach((btn) => {
//     btn.addEventListener("click", (event) => {
//         const park = event.target.parentNode;
//         park.style.backgroundColor = "#c8e6c9";
// });
// });

//// Select the `nameSorter` link
const nameSorter = document.querySelector("#name-sorter");

//// Add an event listener
nameSorter.addEventListener("click", (event) => {
//// Prevent default (browser page reload)
    event.preventDefault();
    console.log("You clicked the name sorter");
});

nameSorter.addEventListener("click", (event) => {
  event.preventDefault();

const main = document.querySelector("main");

const parksList = main.querySelectorAll(".park-display");

main.innerHTML = "";

const parksArray = Array.from(parksList);

parksArray.sort((parkA, parkB) => {

  const parkAName = parkA.querySelector("h2").innerText;
  const parkBName = parkB.querySelector("h2").innerText;

  if (parkAName < parkBName) {
    return -1;
  } else if (parkAName > parkBName) {
    return 1;
  } else {
    return 0;
  }
});

parksArray.forEach((park) => {
  main.appendChild(park);
});

});

console.log("Before!");

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("Loaded!");
});

console.log("After!");
//////////////////////////////////////////////////