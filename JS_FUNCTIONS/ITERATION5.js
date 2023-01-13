const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(mixedElements) {
  let sumElements = 0;
    for (let element of mixedElements){
        if (typeof (element) == "number"){
            sumElements += element;
        } else  if (typeof (element) == "string"){
            sumElements += element.length;
        }
    }

    console.log (sumElements);
}

averageWord(mixedElements);