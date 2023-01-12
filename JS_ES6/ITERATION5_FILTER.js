//5.1

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const older = ages.filter (age => age > 18);

console.log (older);


//5.2

const par = ages.filter (age => age % 2 === 0);
console.log (par);


//5.3

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const playersLOL = streamers.filter (player => player.gameMorePlayed == "League of Legends");
console.log (playersLOL);


// 5.4

const playersWithU = streamers.filter (playerU => playerU.name.toLowerCase().includes("u"));
console.log (playersWithU);

//5.5

const playersLegend = streamers.filter (playerLegend => playerLegend.gameMorePlayed.toLowerCase().includes("legend"));

for (playerLegend of playersLegend){
    if (playerLegend.age > 35 ){
        playerLegend.gameMorePlayed= playerLegend.gameMorePlayed.toUpperCase();
    }
}
console.log (playersLegend);


//5.6

let input = "i";

const playersWithInput = streamers.filter (playerInput => playerInput.name.toLowerCase().includes(input));
console.log (playersWithInput);



