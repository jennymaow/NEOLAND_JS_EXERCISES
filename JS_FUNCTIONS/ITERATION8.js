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


  function repeatCounter(param) {
    let orderedCounterWords = counterWords.sort();
    let counter = 0;
    for (word of orderedCounterWords){
        if (word == orderedCounterWords[orderedCounterWords.indexOf(word) + 1]){
            counter++;
        }
        
    }
    console.log (counter);
  }

  repeatCounter (counterWords);