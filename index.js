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

const ratings = document.querySelectorAll(".rating-display .value");

for (let rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);

    if(ratingValue > 4.7) {
        // rating.style.fontWeight = "bold";
        // rating.style.color = "#3ba17c";
        rating.classList.add("high-rating");
        rating.classList.remove("value");
    }
}