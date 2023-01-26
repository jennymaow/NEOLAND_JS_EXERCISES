/* 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
console.log(). Para ello, es necesario que crees un .html y un .js */

fetch("https://api.agify.io?name=michael")
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  });

/*   1.2 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
fetch() para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input.
*/

const baseUrl = "https://api.nationalize.io";
const myBtn = document.querySelector("button");
const myInput = document.querySelector("input");

myInput.addEventListener("input", (ev) => {
  myBtn.addEventListener("click", (event) => {
    fetch(`https://api.nationalize.io?name=${ev.target.value}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        

        /* 1.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
de MZ. */

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
          `El nombre ${ev.target.value} tiene ${phraseCountry}.`
        );
        const newP = document.createElement("p");
        newP.appendChild(phrase);
        document.body.appendChild(newP);


        /* 1.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
de los p que hayas insertado y que si el usuario hace click en este botón 
eliminemos el parrafo asociado. */


        const myP = document.querySelectorAll("p");
        for (let item of myP) {
          const myBtn = document.createElement("button");
          item.appendChild(myBtn);
          myBtn.addEventListener("click", (event) => {
            item.remove();
            console.log(cardsDiv);
          });
        }
      });
  });
});
