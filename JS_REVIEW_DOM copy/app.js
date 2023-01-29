//1.1

const countries1 = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const countryList = document.createElement("ul");

document.body.appendChild(countryList);

for (country of countries1) {
  countryList.insertAdjacentHTML("afterbegin", `<li>${country}</li>`);
}

//1.2

const removeItem = document.querySelector(".fn-remove-me");

removeItem.remove();

//1.3

const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const carsList = document.createElement("ul");
const carsDiv = document.querySelector("div[data-function='printHere']");

carsDiv.appendChild(carsList);

for (car of cars) {
  carsList.insertAdjacentHTML("afterbegin", `<li>${car}</li>`);
}

//1.4

const countries = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

const myNewDiv = document.createElement("div");

document.body.appendChild(myNewDiv);

const printInDocument = (array) => {
  for (item of array) {
    myNewDiv.innerHTML += `
        <div class="card">
            <h4>${item.title}</h4>
            <img src=${item.imgUrl} alt=${item.title}>
        </div>
        `;
  }
};

printInDocument(countries);

//1.5
const cardsDiv = document.querySelectorAll("div.card");
const newButton = document.createElement("button");
document.body.appendChild(newButton);
newButton.innerHTML = "X";

newButton.addEventListener("click", (event) => {
  myNewDiv.removeChild(myNewDiv.lastChild);
});

//1.6

for (let cardDiv of cardsDiv) {
  const myBtn = document.createElement("button");
  myBtn.innerHTML = "X";
  myBtn.classList.add("delete");
  cardDiv.appendChild(myBtn);
}

const myButtons = document.querySelectorAll("button.delete");

for (let cardDiv of cardsDiv) {
  for (let button of myButtons) {
    button.addEventListener("click", (event) => {
      cardDiv.remove();
      console.log(cardDiv);
    });
  }
}
