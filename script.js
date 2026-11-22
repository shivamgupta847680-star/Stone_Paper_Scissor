let userScore = 0;
let compScore = 0; 
 
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorecPara = document.querySelector("#user-Score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice  = () => {
    const options = ["rock", "paper", "scissor"]
    const ranIdx = Math.floor(Math.random() *3);
    return options[ranIdx];
}
const drowGame = () => {
    msg.innerText = "Game was Drow. Play again";
    msg.style.backgroundColor = "green";
}
const showWinner  = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorecPara.innerText = userScore;
        msg.innerText = `you win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "greeen";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};
const playGame = (userChoice) =>{
    const compChoice = genCompChoice();

    if (userChoice === compChoice){
        drowGame();
    }else{
        let userWin = true;
        if (userChoice === "rock"){
            userwin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;       
        }else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        
    });
    
});