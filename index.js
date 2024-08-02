const $ =document;
const resultPlayer = $.querySelector(".result-player");
const rsultBot = $.querySelector(".result-bot");
const winnerElement = $.querySelector(".winner");
const player = $.querySelector("#you");
const opponent = $.querySelector("#opponent"); 
const timerElement = $.querySelector('.timer');
const entities = ["Rock","Scissor","Paper"];


for (let index = 0; index < entities.length; index++) {
    let entity = entities[index];
    $.querySelector(`#${entity.toLowerCase()}`).addEventListener('click',async ()=>{
        resultPlayer.textContent = `You : ${entity}`;
        rsultBot.textContent = "? : Oppo";
        await countdown(timerElement);
        let oppo = resultOppo();
        rsultBot.textContent = `${oppo} : Oppo`;
        let winner = checkWinner(entity.toLocaleLowerCase(),oppo.toLowerCase());
        winnerElement.textContent = winner;
    
        if(winner == "You Winner!"){
            winnerElement.style.color = "chartreuse";
            player.textContent = (1 + parseInt(opponent.textContent)).toString();
        }
        else if(winner == "You Loser!"){
            winnerElement.style.color = "red";
            opponent.textContent = (1 + parseInt(opponent.textContent)).toString();
        }
        else{
            winnerElement.style.color = "bisque";
        }
    })
}

function checkWinner(player,oppo){
    if(player == "rock" && oppo == "scissor") return "You Winner!"
    if(player == "rock" && oppo == "paper") return "You Loser!"
    if(player == "scissor" && oppo == "rock") return "You Loser!"
    if(player == "scissor" && oppo == "paper") return "You Winner!"
    if(player == "paper" && oppo == "scissor") return "You Winner!"
    if(player == "paper" && oppo == "rock") return "You Loser!"
    if(player == "paper" && oppo == "paper") return "Equal!!"
    if(player == "rock" && oppo == "rock") return "Equal!!"
    if(player == "scissor" && oppo == "scissor") return "Equal!!"

}

function resultOppo(){
    const entities = ["Rock","Scissor","Paper"]
    const index = Math.floor(Math.random()*3) 
    return entities[index]
}


function countdown(timerElement) {
    return new Promise((resolve) => {
        let count = 3;
        timerElement.textContent = `Timer : ${count}s`;

        let countdownInterval = setInterval(function () {
            count--;
            timerElement.textContent = `Timer : ${count}s`;

            if (count <= 0) {
                clearInterval(countdownInterval);
                timerElement.textContent = "Result :";
                resolve();
            }
        }, 1000);
    });
}