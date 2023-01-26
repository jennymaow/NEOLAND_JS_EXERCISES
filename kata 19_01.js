

numbers=[1,-2,3,4,5];
 function positiveSum(arr) {
  let sumArr = 0;
  for (let number of arr){
    if (number>0){
      sumArr+=number;
    }
  }
  return console.log(sumArr);
}

positiveSum(numbers);