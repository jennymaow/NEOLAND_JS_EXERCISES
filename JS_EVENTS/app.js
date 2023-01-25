const myBtn = document.querySelector ("#btnToClick");

console.log (myBtn);

myBtn.addEventListener("click", (event) => {
    console.log(
      `Has clickado en un botón con el texto -> ${event.target.innerHTML}`
    );
  });

const myInputFocus = document.querySelector("input.focus");

myInputFocus.addEventListener("focus",(event)=>{
    console.log (event.target.value);
}) 


const myInputValue = document.querySelector("input.value");

myInputValue.addEventListener("input",(event)=>{
    console.log (event.target.value);
}) 
