let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

let buttonPressed = document.getElementById("btn");

let turnLeft = document.getElementById("turn")
let message = document.getElementById("message")

let showMessage = (value) =>{
    let enteredNum = value;
        if(enteredNum < 1){
        alert("Please enter a number or which is greater than 1");
        }
        else if(enteredNum > 100){
        alert("Please enter a number less than 100");
        }
        else if(enteredNum > randomNumber ){
            message.innerHTML = "You are too high ! <br> please go down";
        }
        else if(enteredNum < randomNumber){
            message.innerHTML = "You are too low ! <br> please go up ";
        }
        else if(enteredNum == randomNumber){
             message.innerHTML = "You are correct !! You Win";
             buttonPressed.disabled = true;
         }

}
let turns = () => {
    turnLeft.textContent--;
    if(turnLeft.textContent === '0'){
        message.innerHTML = "You Lost ";
        document.querySelector("#btn").disabled  =true;
    }
}
buttonPressed.onclick = function () {
    let inputNumber = document.querySelector("#screen").value;

    showMessage(inputNumber);
    turns();
   document.querySelector("#screen").value ="";
}


