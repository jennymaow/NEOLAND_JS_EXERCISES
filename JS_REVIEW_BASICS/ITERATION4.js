const words = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

function findArrayIndex(array, wordUser) {
    for (let word of array){
        if (wordUser == word){
            console.log (`La palabra ${wordUser} está en la posición ${array.indexOf(word)}`);
        }
    }
}

findArrayIndex(words,"Ajolote");


