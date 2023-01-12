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
      const newCounterWords = [];
    for (word of counterWords ){
      let counter = orderedCounterWords.filter ((wordSearched) => wordSearched === word);
      newCounterWords.push (` ${word} se repite ${counter.length} veces`);console.log (counter);
    }
   console.log (newCounterWords);
   

  } 
 

  repeatCounter (counterWords);