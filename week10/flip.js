//FOR HOVER
const card = document.querySelector(".card");
console.log(card);

card.addEventListener("mouseenter", flipMe);

function flipMe() {
    card.classList.add("flip");
}
card.addEventListener("mouseleave", flipMeBack);
function flipMeBack() {
    card.classList.remove("flip");
}

// FOR CLICK
// const card = document.querySelector(".card");
// console.log(card);

// card.addEventListener("click", function (){
//     card.classList.toggle("flip");
// });

