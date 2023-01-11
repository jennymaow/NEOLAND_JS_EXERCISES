//1.1

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log (avengers[0]);


//1.2

avengers[0] = "IRONMAN";


//1.3

console.log (avengers.length);


//1.4

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push ("Morty" , "Summer");
console.log (rickAndMortyCharacters);
console.log (rickAndMortyCharacters[4]);
//Usar lenght -1


//1.5
rickAndMortyCharacters.push ("Lapiz Lopez");
rickAndMortyCharacters.pop();
console.log (rickAndMortyCharacters[0]);
console.log (rickAndMortyCharacters[4]);
//Usar length-1


//1.6

console.log(rickAndMortyCharacters.splice (1,1));
console.log (rickAndMortyCharacters);
