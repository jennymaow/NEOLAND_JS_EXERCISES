const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];

  const finderName = (nameUser) =>{
    return nameFinder.filter((name) =>  name == nameUser);
    // console.log (finderName);
   }
   const foundName= finderName("Jessica");
 
   if (foundName.length > 0){
     console.log ("True");
    
     for ( let name of nameFinder){
         if (name == foundName[0]){
            let position = nameFinder.indexOf(name);
             console.log ("Se encuentra en la posición", position);
         }
     }
     
   }
 
/*  
ANTIGUA VERSIÓN

  let nameUser = "Tony";
  const finderName = nameFinder.filter(
    (name) =>  name == nameUser);
   // console.log (finderName);

  if (finderName.length > 0){
    console.log ("True");
   
    for ( let name of nameFinder){
        if (name == finderName[0]){
           let position = nameFinder.indexOf(name);
            console.log ("Se encuentra en la posición", position);
        }
    }
    
  } */

 

  


