const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ];


for (let toy of toys){
    
    if (toy.name.toLowerCase().includes ("gato")) {
        toys.splice(toys.indexOf(toy));
        /* console.log (toy); */
    }

    //También se puede declarar un array nuevo y push() en él los valores que no tienen gato (con condicional). Imprimir nuevo array.
}  

console.log (toys);

//Haciendo una función que funciona para cualquier array y word.

const removeWord = (list, word)=>{
    if (list.name.toLowerCase().includes (word.toLowerCase())) {
       list.splice(list.indexOf(word),1);
        /* console.log (toy); */
    }

}


console.log (toys);