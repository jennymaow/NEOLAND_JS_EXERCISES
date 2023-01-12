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
    
  }
  


