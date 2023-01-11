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


  function finderName(nameFinder,nameUser) {
    
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

  finderName (nameFinder,"Peter");
  finderName (nameFinder,"Jenny");

