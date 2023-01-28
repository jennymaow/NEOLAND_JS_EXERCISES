//5.6

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const myInput = document.querySelector("input");




myInput.addEventListener("input",(event)=>{
    console.log (event.target.value);
    const playersWithInput = streamers.filter (playerInput => playerInput.name.toLowerCase().includes(myInput.value.toLowerCase()));
    console.log (playersWithInput);
}) 

