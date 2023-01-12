//6.1

const numbers = [32, 21, 63, 95, 100, 67, 43];

const hundred = numbers.find (number => number === 100);

console.log(hundred);


//6.2

const movies = [
	{title: 'Madagascar', stars: 4.5, date: 2015},
	{title: 'Origen', stars: 5, date: 2010},
	{title: 'Your Name', stars: 5, date: 2016}
];

const years = movies.find(year => year.date === 2010);
console.log (years);


//6.3

const aliens = [
	{name: 'Zalamero', planet: 'Eden', age: 4029},
	{name: 'Paktu', planet: 'Andromeda', age: 32},
	{name: 'Cucushumushu', planet: 'Marte', age: 503021}
];

const mutations = [
	{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
	{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
	{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];

const alien1 = aliens.find (alien => alien.name === "Cucushumushu");
console.log (alien1);

const mutation1 = mutations.find (mutation => mutation.name === "Porompompero");
console.log (mutation1);

const alienMutation1 = {...alien1, mutation: mutation1};

console.log (alienMutation1);
