const placesToTravel = [
    {id: 5, name: 'Japan'}, 
    {id: 11, name: 'Venecia'}, 
    {id: 23, name: 'Murcia'}, 
    {id: 40, name: 'Santander'}, 
    {id: 44, name: 'Filipinas'}, 
    {id: 59, name: 'Madagascar'}];


for ( let i = 0; i < placesToTravel.length; i++){

    if (placesToTravel[i].id == 11 || placesToTravel[i].id == 40) {
        placesToTravel.splice(i,1);
    }
    // console.log (placesToTravel); 

} 

console.log (placesToTravel);

// Con bucle for of

 for ( let place of placesToTravel){

    if (place.id == 11 || place.id == 40 ) {
        placesToTravel.splice(placesToTravel.indexOf(place),1);
    }
    // console.log (placesToTravel); 
    // console.log (placesToTravel); 
} 



console.log (placesToTravel);