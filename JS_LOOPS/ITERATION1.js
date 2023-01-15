const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];
for ( let i = 0; i < products.length; i++){

   if (products[i].includes ('Camiseta') === true){
    console.log (products[i]);
   }
}

//Ejercicio hecho con una función, que funciona para cualquier palabra y cualquier array.

const searchWord = (list,word) => {
for (let product of list){
   if (product.toLowerCase().includes(word.toLowerCase())){
      console.log (product);
   }
}
}

searchWord(products, "Camiseta");