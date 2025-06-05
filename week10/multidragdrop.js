// const myCards = [
//     { id: 1, name: "Queen", src: "queen.png" },
//     { id: 2, name: "King", src: "king.png" },
//     { id: 3, name: "Jack", src: "jack.png" },
//   ];

//   let cardComposition ="";

//   for (let i =0; i<myDards.length; i++) {
//     cardComposition +=`
//     <div class="card-container">
//       <div class="card" draggable="true">
//         <div class="card-face"><img src="cloud.png" alt="Back" /></div>
//         <div class="card-face flip">
//           <img src="${myCards[i].src}" alt="${myCards[i].name}" class"card-front />
//         </div>
//       </div>
//     </div>

//     `;
//     console.log(cardComposition);
//   }

//   const deck = document.querySelector(".deck");
//   console.log(deck);

//   deck.innerHTML =cardComposition;

//   const cards = document.querySelectorAll(".card");
//   console.log(cards);

// let draggedCard = null;

// const dropBox = document.querySelector(".dropbox");
// dropBox.innerHTML = "";
// for (let i = 0; i < cards.length; i++) {
//   cards[i].addEventListener("dragstart", function () {
//     draggedCard = cards[i];
//     dropBox.innerHTML = "";
//   });
// }

console. log(cards);

let draggedCard = null;


for (let i = 0; i < cards. length; i++) {
    cards [i].addEventListener("dragstart", function () {
        draggedCard = cards [1];
        const value = draggedCard.querySelector(".card-front");
        console.log (value.alt);
    });
}

const dropbox = document.querySelector(".dropbox");
console. log(dropbox);

dropbox.addEventListener ("dragover", function (e) {
    e-preventDefault();
});

dropbox.addEventListener("drop", function () {
    dropbox.innerHTML = "";
    const clone = draggedCard;
    //const clone = draggedCard.cloneNode(true);
    //dropbox. innerHTML = draggedCard;
    dropbox.appendChild(clone);
    clone.addEventListener("click", function () {
    clone.classList.toggle("flip");
 });

 draggedCard = null;
});