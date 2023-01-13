const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];


  function removeDuplicates(param) {
    let orderedDuplicates = duplicates.sort();
  
    for (let food of orderedDuplicates){

        if (food == orderedDuplicates[orderedDuplicates.indexOf(food) + 1]){
            orderedDuplicates.splice(orderedDuplicates.indexOf(food), 1 );
        }

    }
    console.log (orderedDuplicates);
  }

  removeDuplicates (duplicates);