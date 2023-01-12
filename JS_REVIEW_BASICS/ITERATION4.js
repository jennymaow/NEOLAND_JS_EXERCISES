const wordUser = "Mosquito";
const words = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

function findArrayIndex(array, text) {
    for (word of words){
        if (wordUser == word){
            console.log (`La palabra ${wordUser} está en la posición ${words.indexOf(word)}`);
        }
    }
}

findArrayIndex(words,wordUser);