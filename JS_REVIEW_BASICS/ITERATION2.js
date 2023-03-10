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
// console.log (favoriteSounds);

let sumVolume = 0;

for (let favoriteSound of favoriteSounds) {
  for (let key in favoriteSound) {
    sumVolume += favoriteSound[key].volume;
  }
}

let averageVolume = sumVolume / (3 * favoriteSounds.length);
console.log(averageVolume);

//Acceder directamente a volumes sin almacenar primero favoritesSounds en un array.

let sumVolume2 = 0;
for (let user of users) {
  for (let key in user.favoritesSounds) {
    sumVolume2 += user.favoritesSounds[key].volume;
  }
}

let objectLenght = 0;

for (const user of users) {
  objectLenght = Object.keys(user.favoritesSounds).length;
}

let averageVolume2 = sumVolume / (objectLenght * users.length);
console.log(averageVolume2);
