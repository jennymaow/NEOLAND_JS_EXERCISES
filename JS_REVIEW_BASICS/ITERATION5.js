const rollDice = (min,faces) =>{
    //Redondea hacia arriba a num entero
    min = Math.ceil(min);
    //Redondea hacia abajo a num entero
    faces = Math.floor(faces);
   return Math.floor(Math.random() * (faces -min + 1) + min);
}

const randomNumber = rollDice (1,6);
console.log (randomNumber);