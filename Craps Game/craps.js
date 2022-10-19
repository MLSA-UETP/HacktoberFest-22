const img_1 = document.createElement('img');
const img_2 = document.createElement('img');

let message = document.getElementById('message');
let points = document.getElementById('points')

let rollingDice = [1, 2, 3, 4, 5, 6];
let counting = 0;


let craps = () => {

    let dice_1 = getDice();
    let dice_2 = getDice();

    img_1.src = `./images/${dice_1}.png`;
    img_2.src = `./images/${dice_2}.png`;


    let img_container = document.getElementById('img_container');

    img_container.appendChild(img_1);
    img_container.appendChild(img_2);


    
    if( counting == 0) {
        IstRolled(dice_1, dice_2 )

    } else {
        SecRolled( dice_1, dice_2 )
    }
}




let getDice = () => {
    let randomDice = Math.floor(Math.random() * 6);
    console.log(randomDice);

    return rollingDice[randomDice];
}




let IstRolled = ( value1, value2) => {
    let sum = value1 + value2;

    if(sum == 7 || sum == 11){
        message.textContent = "YOU WIN!!"
        counting = 0;
        document.getElementById("roll_button").disabled = true;

    } else if( sum == 2 || sum == 3 || sum == 12){
        message.textContent = "YOU Lost";
        document.getElementById("roll_button").disabled = true;

    } else {
        message.textContent = `Roll again till you get same points,
                                or If 7 you will lost`;
        points.textContent = sum;

        counting++
    }

}



let SecRolled = (value1, value2) => {
    let sum = value1 + value2;

    if( sum == points.textContent){
        message.textContent = "Points Matched, YOU WIN!!"
        document.getElementById("roll_button").disabled = true;

    } else if(sum == 7){
        message.textContent = "It is 7, YOU LOST";
        document.getElementById("roll_button").disabled = true;


    } else{
        message.textContent = `Roll again till you get same points,
                                or If 7 you will lost`;
    }
}
document.getElementById('roll_button').onclick = function () {
        craps();

}
