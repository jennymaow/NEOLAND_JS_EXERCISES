const words = [
  "Mesirve",
  "Cristiano Romualdo",
  "Fernando Muralla",
  "Ronalguiño",
];

const swap = (list, i, j) => {
    const word = list[i];
    list[i]=list[j];
    list[j]= word;
    console.log (list);
};

swap(words, 1, 3);
