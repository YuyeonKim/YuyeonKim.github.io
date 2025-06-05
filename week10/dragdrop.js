const card = document.querySelector(".card");
console.log(card);
let draggedCard = null

card.addEventListener("dragstart", function () {
    draggedCard = card;
    console.log(draggedCard);
});

const dropbox = document.querySelector(".dropbox")
console.log(dropbox);

dropbox.addEventListener("drop", function (e) {
    e.preventDefault();
});

// dropbox.addEventListener("dragstart", function () {
//    //cloning 
//     const clone =draggedCard.cloneNode(true);
//     // dropbox.innerHTML = draggedCard
//     dropbox.appendChild(clone);
//     draggedCard = null;
// });

dropbox.addEventListener("dragstart", function () {
     const clone =draggedCard;
     // dropbox.innerHTML = draggedCard
     dropbox.appendChild(clone);
     clone.addEventListener("click",function () {
        clone.classList.toggle("flip");
     });
     draggedCard = null;
 });