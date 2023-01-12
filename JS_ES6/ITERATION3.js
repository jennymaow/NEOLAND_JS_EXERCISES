// 3.1

const pointsList = [32, 54, 21, 64, 75, 43]
const pointsListCopy = [...pointsList];
console.log (pointsListCopy);


// 3.2

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyCopy = {...toy};
console.log (toyCopy);


//3.3

const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54,87,99,65,32];
const pointsNewList = [...pointsList1,...pointsList2];
console.log (pointsNewList);


//3.4

const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']};

const toyNew = {...toy,...toyUpdate};
console.log (toyNew);


//3.5

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const coloresNew = [...colors];
const colorsNew = coloresNew.splice(2,1);
console.log (coloresNew);


