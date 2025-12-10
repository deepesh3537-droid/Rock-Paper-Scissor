
let player = null;
let computerChoice = null;
let result = null;


let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let question = document.getElementById("question");



function hide() {
    document.getElementById("Fight").classList.add("hidden");
    document.getElementsByClassName("Computer")[0].classList.add("hidden");
    document.getElementsByClassName("Player")[0].classList.add("hidden");
    document.querySelector(".Stage2").classList.remove("hidden");

    const music = document.getElementById("bg-music");
    music.play();
}

document.getElementById("Fight").addEventListener("click", hide);
document.getElementById("Play").addEventListener("click", hide);


rock.addEventListener("click", rf);
paper.addEventListener("click", pf);
scissor.addEventListener("click", sf);

rock.addEventListener("click", ChangeComputer);
paper.addEventListener("click", ChangeComputer);
scissor.addEventListener("click", ChangeComputer);


function rf() {
    player = "rock";

    paper.classList.add("hidden");
    scissor.classList.add("hidden");
    rock.classList.add("center");
    rock.classList.add("disable");

    computeResult();
}

function pf() {
    player = "paper";

    rock.classList.add("hidden");
    scissor.classList.add("hidden");
    paper.classList.add("center");
    paper.classList.add("disable");


    computeResult();
}

function sf() {
    player = "scissor";

    rock.classList.add("hidden");
    paper.classList.add("hidden");
    scissor.classList.add("center");
    scissor.classList.add("disable");


    computeResult();
}
function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"]; 
    return choices[Math.floor(Math.random() * choices.length)];
}

function ChangeComputer() {
 
    if (computerChoice === null) {
        computerChoice = getComputerChoice();
    }

    if (computerChoice === "rock") {
        question.src = "stone.png";
    } 
    else if (computerChoice === "paper") {
        question.src = "paper.png";
    } 
    else {
        question.src = "scissor.png";
    }
}


function getWinner(player, computer) {
    if (player === computer) return "tie";

    if (
        (player === "rock" && computer === "scissor") ||
        (player === "scissor" && computer === "paper") ||
        (player === "paper" && computer === "rock")
    ) {
        return "player";
    }

    return "computer";
}


function computeResult() {
    computerChoice = getComputerChoice(); 

    ChangeComputer(); 

    setTimeout(() => {
        result = getWinner(player, computerChoice);
        finalresult();
    }, 2000);
}


function finalresult() {
    question.classList.add("hidden");
    rock.classList.add("hidden");
    paper.classList.add("hidden");
    scissor.classList.add("hidden");
    document.querySelector(".ComputerChoice").classList.add("hidden");
    document.querySelector(".PlayerChoice").classList.add("hidden");
    

    let resultimg = document.createElement("img");
    if(result == "tie"){
        resultimg.src = "\Draw.png";
        
    }
    else if(result == "player"){
        resultimg.src = "\PlayerWon.png";

    }
    else{
        resultimg.src = "\ComputerWon.png";
    }
    resultimg.classList.add("resultanimation");
    document.querySelector(".Stage2").appendChild(resultimg);




}



