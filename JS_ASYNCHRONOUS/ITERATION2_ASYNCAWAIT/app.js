//2.1
const runTimeOut = async () => {
    const promise =  new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);
    })

    await promise.then(() => {console.log('Time out!')})
};

runTimeOut();





//2.2 

async function getCharacters () {
    await fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(characters => console.log(characters));
}

getCharacters();