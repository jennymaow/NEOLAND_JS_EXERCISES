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
    let newCounterWords = [];
    for (word of orderedCounterWords){
        if (word == orderedCounterWords[orderedCounterWords.indexOf(word) + 1]){
            newCounterWords.push(word);
            console.log (newCounterWords.length);
        }
        
    }
  }

  repeatCounter (counterWords);