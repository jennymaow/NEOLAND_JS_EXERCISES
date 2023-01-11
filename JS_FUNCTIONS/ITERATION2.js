const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

/* function findLongestWord(avengers) {
    let longestWord;
  for (let avenger of avengers) {

    let nextWord = avengers[avengers.indexOf(avenger) + 1];
    // console.log (nextWord);

    if (avenger.length < nextWord.length){
        longestWord =  nextWord;
        
        }
       //  console.log (longestWord);
  }
  console.log (longestWord);
} */


function findLongestWord(avengers) {
    let longestWord;
  for (let i=0; i<avengers.length - 1;i++) {

    if (avengers[i].length < avengers[i + 1].length){
        longestWord =  avengers[i + 1];
        
        }
       /*  console.log (longestWord); */
  }
  console.log (longestWord);
}


findLongestWord(avengers);