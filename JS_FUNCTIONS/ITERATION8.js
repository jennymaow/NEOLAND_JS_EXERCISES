const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];

  
 function repeatCounter(counterWords) {
      const orderedCounterWords = counterWords.sort();
      const newCounterWords = new Set();
    for (let word of counterWords ){
      let counter = orderedCounterWords.filter ((wordSearched) => wordSearched === word);
      newCounterWords.add (`${word} se repite ${counter.length} veces`);
    }

    console.log (newCounterWords);

  } 
 

  repeatCounter (counterWords);