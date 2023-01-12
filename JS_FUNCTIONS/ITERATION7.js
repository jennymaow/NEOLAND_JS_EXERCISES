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


/*   function finderName(nameFinder,nameUser) {
    
    let counter = 0;

    for (let name of nameFinder){

        if (name == nameUser){
            counter = 1;
        } else {
            counter = 2;
        }
    }

    if (counter = 1){
        console.log ("True");

    } else {
        console.log ("False");
    }

  }
 */
  /* finderName (nameFinder,"Peter");
  finderName (nameFinder,"Jenny"); */

  let nameUser = "Tony";
  const finderName = nameFinder.filter(
    (name) =>  name.includes(nameUser)
  );
   // console.log (finderName);

  if (finderName.length > 0){
    console.log ("True");
   
    for ( let name of nameFinder){
        if (name == finderName[0]){
           let position= nameFinder.indexOf(name);
            console.log ("Se encuentra en la posición", position);
        }
    }
    
  }
  


