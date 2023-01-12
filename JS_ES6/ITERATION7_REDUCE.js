// 7.1

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const sumScore = exams.reduce((acc,score)=> acc + score.score, 0);
console.log (sumScore);

//7.2
const scoresApproved = exams.filter (scoreApproved => scoreApproved.score>4);
const sumApproved = scoresApproved.reduce((acc1,approved)=> acc1 + approved.score, 0);
console.log (sumApproved);


//7.3

const promedio = sumScore/exams.length;
console.log (promedio);




