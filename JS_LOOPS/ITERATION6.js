const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ];


for (let toy of toys){
    
    let nombre = toy.name;
    
    if (nombre.includes ("gato")) {
        toys.pop();
        /* console.log (toy); */
    }
}    

console.log (toys);