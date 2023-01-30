//1.1

const countries1 = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const countryList = document.createElement("ul");

document.body.appendChild(countryList);

for (const country of countries1) {
  const li = document.createElement("li");
  li.textContent = country;
  //countryList.insertAdjacentHTML("afterbegin", `<li>${country}</li>`);
  countryList.appendChild(li);
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

const printInDocument = (countries) => {
  for (country of countries) {
    /*  myNewDiv.innerHTML += `
        <div class="card">
            <h4>${item.title}</h4>
            <img src=${item.imgUrl} alt=${item.title}>
        </div>
        `; */
    const myDivCard = document.createElement("div");
    myDivCard.classList.add("card");
    const h4 = document.createElement("h4");
    const img = document.createElement("img");
    h4.textContent = country.title;
    img.src = country.imgUrl;
    img.alt = country.title;
    
    const myBtn = document.createElement("button");
    myBtn.innerHTML = "X";
    myDivCard.appendChild(h4);
    myDivCard.appendChild(img);
    myDivCard.appendChild(myBtn);
    myNewDiv.appendChild (myDivCard);
    myBtn.addEventListener("click", (event) => {
      myDivCard.remove();
    });
  }
};


document.body.appendChild (myNewDiv);
printInDocument(countries);

//1.5
const myDivCard = document.querySelector("div.card");
const newButton = document.createElement("button");
document.body.appendChild(newButton);
newButton.innerHTML = "Eliminar el último";
newButton.addEventListener("click", (event) => {
  myNewDiv.removeChild(myNewDiv.lastChild);
  //cardsDiv[cardsDiv.length - 1].remove();
});

//1.6
