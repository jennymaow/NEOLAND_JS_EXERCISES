const words = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

const swap = (list, i, j) => {

    for (let word of list){
      
        if ((list.indexOf(word)) == i){

            (list.indexOf(word)) = j;

        } else if ((list.indexOf(word)) == j){

            (list.indexOf(word)) = i;
        }
    }
   
    return list;
}

swap(words,1,3);