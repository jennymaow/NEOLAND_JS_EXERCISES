const container = document.querySelector("#container");

const printInDocument = async () => {
  const data = await fetch("https://apilol-seven.vercel.app/api/campeones");

  const json = await data.json();
 mapCharacters(json);
};

const mapCharacters = (json) => {
  const res = json.map((character) => ({
    name: character.name,
    image: character.url,
    runes: character.runas,
  }));

  printCharacters(res);
};

const printCharacters = (json) => {
  container.innerHTML = "";

  for (const character of json) {
    const card = document.createElement("figure");
    card.innerHTML = `
        <img src=${character.image} alt=${character.name}>
        <h2>${character.name}</h2>
        <p><a href=${character.runes}>See runes</a></p>
        `; 
        container.appendChild(card);
  }

};

printInDocument();
