const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(numbers) {
    
    let sumNumbers = 0;

  for ( let number of numbers){
    
    sumNumbers += number;
  }

  console.log (sumNumbers);
}

sumAll(numbers);

