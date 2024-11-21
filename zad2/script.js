let printNumberButton = document.querySelector(".printNumber");
let swichColorButton = document.querySelector(".swichColor");

let numberDiv = document.querySelector(".number"); 
let counter = 0;

let color = true;

printNumberButton.addEventListener("click", ()=>{
    counter++;
    numberDiv.innerHTML = counter;

})

swichColorButton.addEventListener("click", ()=>{

    if(color){
        numberDiv.style.color = "red";
        color= !color

    }else{
        numberDiv.style.color = "black";
        color = !color;
    }




})