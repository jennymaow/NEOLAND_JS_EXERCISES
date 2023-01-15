const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

let favoriteSounds = [];
for (let user of users) {
  favoriteSounds.push(user.favoritesSounds);
}
console.log(favoriteSounds);

let sounds = [];
for (let favoritesSound of favoriteSounds) {
  for (let sound in favoritesSound) {
    sounds.push(sound);
  }
}


let numberFavorites = new Set();
for (let sound of sounds) {
  let counter = sounds.filter((soundSearched) => soundSearched == sound);

  if (counter.length > 1){
  numberFavorites.add(
    `El sonido ${sound} ha sido guardado como favorito ${counter.length} veces.`
  );
  } else {
    numberFavorites.add(
        `El sonido ${sound} ha sido guardado como favorito ${counter.length} vez.`
      );
  }
}
console.log (numberFavorites);
