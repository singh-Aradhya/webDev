let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const  genCompChoice =() => {
    const options =["rock","paper","scissors"];
    const randIdx =Math.floor(Math.random()*3);
    return options [randIdx];
}
const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game was Draw Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner =(userWin, userchoice, compChoice)  => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${ userchoice} beats  ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText =`You lost. ${compChoice} beats Yours  ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userchoice) => {
       console.log("userchoice = ", userchoice);
       //Generate computer choice
       const compChoice = genCompChoice();
       console.log("comp choice=",compChoice);

    if(userchoice === compChoice){
        //Draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userchoice === "rock") {
            //scissors,paper
            userWin = compChoice === "paper" ? false : true;
        } else if(userchoice === "paper"){
            //rock,scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, compChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click",()  => {
        const userchoice = choice.getAttribute("id");
         playGame(userchoice);
    });
});