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
//// FORMS AND HANDLERS //////////////////////////
//////////////////////////////////////////////////
const submitHandler = (event) => {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const errors = validateForm(formData);

  // Clear all previous errors
  const errorElements = document.querySelector(".error");
  for (let element of errorElements) {
    element.style.display = "none";
  }

  // Display any new errors
  Object.keys(errors).forEach((key) => {
    // Find the specific error element
    const errorElement = document.querySelector(`#${key}-form .error`);
    errorElement.innerHTML = errors[key];
    errorElement.style.display = "block";
  });

  console.log("The form was submitted")

  // Get the name input
  const parkName = document.querySelector("#name-input").value;

  console.log(parkName);

  // If there are no errors
if (!Object.keys(errors).length) {
  // Create a new element
  const parkSection = document.createElement("section");

  // Add the park class
  parkSection.classList.add("park-display");

  // Construct the HTML for this element
  const content = `
    <h2>${formData.get("name")}</h2>
    <div class="location-display">${formData.get("location")}</div>
    <div class="description-display">${formData.get("description")}</div>
    <button class="rate-button" title="Add to Favourites">&#9734;</button>
    <div class="stats">
      <div class="established-display stat">
        <h3>Established</h3>
        <div class="value">${moment(formData.get("established")).format(
          "MMMM D, YYYY"
        )}</div>
      </div>
      <div class="area-display stat">
        <h3>Area</h3>
        <div class="value">${formData.get("area")}</div>
      </div>
      <div class="rating-display stat">
        <h3>Rating</h3>
        <div class="value">${formData.get("rating")}</div>
      </div>
    </div>
    `;

  // Set the innerHTML
  parkSection.innerHTML = content;

  // Append to the main element
  document.querySelector("main").appendChild(parkSection);
}
};

const main = () => {
  // Get thr form element
  const form = document.querySelector("#park-form");

  // Attach the submit handler
  form.addEventListener("submit", submitHandler);
};

window.addEventListener("DOMContentLoaded", main);

function validateExists(value) {
  return value && value.trim();
}

//// Function validating that each entry has some value entered
function validateForm(formData) {
  const errors = {};

  // Check if name was entered
  if (!validateExists(formData.get("name"))) {
    errors.name = "Please enter a name";
  }

  // Check if rating was entered
  if (!validateExists(formData.get("rating"))) {
    errors.rating = "Please enter a rating";
  }

  // Check if description was entered
  if (!validateExists(formData.get("description"))) {
    errors.description = "Please enter short description";
  }

  // Check if established date was entered
  if (!validateExists(formData.get("established"))) {
    errors.established = "Please enter date";
  }

  // Check if area was entered
  if (!validateExists(formData.get("area"))) {
    errors.area = "Please enter the area of the park";
  }

  // Check if location date was entered
  if (!validateExists(formData.get("location"))) {
    errors.location = "Please enter the location of the park";
  }

  // Check if rating was entered
  if (!validateExists(formData.get("rating"))) {
    errors.rating = "Please enter a rating";
  } else {
    // Check if the rating is a number
    if (!validateNumber(formData.get("rating"))) {
      errors.rating = "Rating must be a number";
    } else {
      // Because it is a number, convert it
      const rating = Number.parseFloat(formData.get("rating"));
      // Check that the rating is between 1 and 5, inclusive
      if (!validateRange(rating, 1, 5)) {
        errors.rating = "Rating must be between 1 and 5 inclusive";
      }
    }
  }

  return errors;
}

function validateNumber(value) {
  return !isNaN(value);
}

function validateRange(value, min, max) {
  return value >= min && value <= max;
}