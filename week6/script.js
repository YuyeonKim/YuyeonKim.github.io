const topHeading = document.querySelector("h1");
console.log(topHeading);
console.log(topHeading.textContent);
topHeading.textContent = "this is my new top heading";
topHeading.style.color = "red";

const allParas = document.querySelectorAll("p");
console.log(allParas);
//console.log(allOaras.textContent);
for (let i = 0; i < allParas.length; i++) {
  console.log(allParas[i].textContent);
  allParas[i].style.border = "1px solid blue";
}

const mySubHeading = document.querySelector("#first-subheading");
// console.log(mySubHeading);
// console.log(mySubHeading.textContent);

const allSubHeadings = document.querySelectorAll("h2");
// console.log(allSubHeading);
for (let i = 0; i < allSubHeadings.length; i++) {
  // console.log(allSubHeadings[i],textContent);
}
