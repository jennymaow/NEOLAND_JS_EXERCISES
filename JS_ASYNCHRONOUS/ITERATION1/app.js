//1.1

fetch("https://api.agify.io?name=michael")
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  });

//1.2

const baseUrl = "https://api.nationalize.io";
const myBtn = document.querySelector("button");
const myInput = document.querySelector("input");


  myBtn.addEventListener("click", (event) => {
    fetch(`https://api.nationalize.io?name=${myInput.value}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        // 1.3

        let countryList = res.country;
        let phrasesList = [];
        for (let item of countryList) {
          // Es un array de objetos countryList console.log (countryList);
          phrasesList.push(
            `un ${item.probability} porciento de ser de ${item.country_id}`
          );
        }

        let phraseCountry = phrasesList.join(" y ");

        let phrase = document.createTextNode(
          `El nombre ${myInput.value} tiene ${phraseCountry}.`
        );

        const newDiv = document.createElement("div");
        const newP = document.createElement("p");
        newP.appendChild(phrase);
        document.body.appendChild(newDiv); 
        newDiv.appendChild(newP);

        // 1.4

          const myBtn = document.createElement("button");
          newDiv.appendChild(myBtn);
          myBtn.innerHTML="X"
          myBtn.addEventListener("click", (event) => {
            newDiv.remove();
          });
      });
  });
