let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const choiceId = choice.getAttribute("id");
        playGame(choiceId);
    })
})

const genCompChoice = ()=>{
    const choices = ["rock","paper","scissor"];
    return choices[Math.floor(Math.random()*3)];
}

let msg = document.querySelector("#msg");
let score = document.querySelector("#user-score");
let scr = document.querySelector("#comp-score");
const gameDraw = ()=>{
    msg.innerText = "Game was Draw!! Please play again...";
    msg.style.backgroundColor = "rgb(17, 17, 65)";
    
}
const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        msg.innerText = `You Win!! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
        userScore = userScore+1;
        score.innerText = userScore;
    }
    else{
        msg.innerText = `You lose!! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        msg.style.color = "white";
        compScore = compScore+1;
        scr.innerText = compScore;
    }
};

const playGame = (userChoice)=>{
    const compChoice = genCompChoice();
    console.log("user choice = ",userChoice);
    console.log("comp choice = ",compChoice);

    if(userChoice === compChoice){
        gameDraw();
    }
    else {
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"? false : true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissor"? false : true;
        }
        else if(userChoice === "scissor"){
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}


