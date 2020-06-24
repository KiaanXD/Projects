let scissors = document.getElementById('s');
let rock = document.getElementById('r');
let paper = document.getElementById('p');
let wincon = document.getElementById('wincon')
let winner = document.getElementById('winner')
let playerScore = document.getElementById('playerScore')
let cpuScore = document.getElementById('computerScore')

scissors.addEventListener('click', playScissors)
rock.addEventListener('click', playRock)
paper.addEventListener('click', playPaper)
//PROGRAM START
let pCount = 0;
let cCount = 0;

function play (playerChoice) {
    let rps = [];
    let compChoices = ['r', 'p', 's'];
    let compRng = Math.floor(Math.random() * 3);
    rps.push(playerChoice)
    rps.push(compChoices[compRng]);
    whoWins(rps[0] + rps[1]);
}
function playScissors () {
    play("s");
}
function playRock () {
    play("r");
}
function playPaper () {
    play("p");
}
function whoWins(rpsValue) {
    //playerChoice is 0, compChoice is 1
    switch(rpsValue){
        case "sp":
        case "rs":
        case "pr":
            gameCondition(1, rpsValue)
            break;
        case "ps":
        case "sr":
        case "rp":
            gameCondition(-1, rpsValue)
            break;
        case "ss":
        case "rr":
        case "pp":
            gameCondition(0, rpsValue)
            break;
    }
}
function gameCondition (factor, rpsValue) {
    if (factor > 0) {
        pCount++
        playerScore.style.color = "lightgreen";
        cpuScore.style.color = "tomato"
        playerScore.innerHTML = pCount;
        wincon.innerHTML = `${rpsTranslator(rpsValue[0])} against ${rpsTranslator(rpsValue[1])}`;
        winner.style.color = "lightgreen";
        winner.innerHTML = "Player wins! :)";

    } 
    if (factor < 0) {
        playerScore.style.color = "tomato";
        cpuScore.style.color = "lightgreen";
        cCount++
        cpuScore.innerHTML = cCount;
        wincon.innerHTML = `${rpsTranslator(rpsValue[0])} against ${rpsTranslator(rpsValue[1])}`;
        winner.style.color = "tomato";
        winner.innerHTML = "Computer wins :("
    }
    if (factor == 0) {
        wincon.innerHTML = `${rpsTranslator(rpsValue[0])} against ${rpsTranslator(rpsValue[1])}`;
        winner.style.color = "black";
        winner.innerHTML = "Draw :/"
    }

}
function rpsTranslator (rpsCharacter) {
    let translated = null;
    switch(rpsCharacter) {
        case "s":
            translated = "Scissors"
            break;
        case "r":
            translated = "Rock"
            break;
        case "p":
            translated = "Paper"
            break;
    }
    return translated;
}

