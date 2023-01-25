let newDiv = document.createElement("div");
let newDiv2 = document.createElement("div");
let newP = document.createElement("p");
let myH2 = document.querySelector("h2");

newDiv.appendChild(newP);
document.body.insertBefore(newDiv, myH2);
console.log(newDiv);

document.body.insertBefore(newDiv2, myH2);

//2.3

/* for (let i = 1; (i = 6); i++) {
  const newP2 = document.createElement("p");
  newDiv2.appendChild (newP2);
}; */

//2.4
myH2.insertAdjacentHTML("beforebegin", "<p>Soy dinámico!</p>");

//2.5
let textH2 = document.createTextNode("Wubba Lubba dub dub");

myH2.appendChild(textH2);

//2.6

const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

let newList = document.createElement("ul");
document.body.insertBefore(newList, myH2);

const listArray = (array) => {
  for (item of array) {
    newList.insertAdjacentHTML("afterbegin", `<li>${item}</li>`);
  }
};

listArray(apps);

//2.7

const removeClass = document.querySelectorAll(".fn-remove-me");

for (let item of removeClass) {
  item.remove();
}

//2.8
let newPDiv = document.createElement("p");
let textDiv = document.createTextNode("Voy en medio!");

let divInsert = document.querySelectorAll("div.fn-insert-here");
newPDiv.appendChild(textDiv);
document.body.insertBefore(newPDiv, divInsert[1]);

//2.9

let newText3 = document.createTextNode("Voy dentro!");
let newP3 = document.createElement("p");

newP3.appendChild(newText3);
console.log(newP3);
console.log(divInsert);

for (let item of divInsert) {
  item.insertAdjacentHTML("afterbegin", "<p>Voy dentro!</p>");
}
