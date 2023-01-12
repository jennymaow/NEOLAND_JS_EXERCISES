const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord1(avengers) {
    let longestWord1 = " ";
  for (let avenger of avengers) {
    // console.log (nextWord);

    if (avenger.length > longestWord1.length){
        longestWord1 = avenger;
        
        }
       //  console.log (longestWord);
  }
  console.log (longestWord1);
} 

findLongestWord1(avengers);

//Forma con bucle for i

 function findLongestWord(avengers) {
  let longestWord;
  for (let i = 0; i < avengers.length - 1; i++) {
    if (avengers[i].length < avengers[i + 1].length) {
      longestWord = avengers[i + 1];
    }
    // console.log (longestWord);
  }
  console.log(longestWord);
}

findLongestWord(avengers); 
