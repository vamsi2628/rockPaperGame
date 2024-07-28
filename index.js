let userScore = 0;
let compScore = 0;
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#7bd6fb";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerHTML = userScore;
    msg.innerHTML = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerHTML = compScore;
    msg.innerHTML = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  // Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    // Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "Rock") {
      // scissors, paper
      userWin = compChoice === "Paper" ? false : true;
    } else if (userChoice === "Paper") {
      // rock, scissors
      userWin = compChoice === "Scissors" ? false : true;
    } else {
      // rock, paper
      userWin = compChoice === "Rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

function handleClick(choice) {
  const userChoice = choice;
  playGame(userChoice);
}

function modeChange() {
  const val = document.querySelector(".body");
  const mode = document.getElementById("mode").innerText;
  const value1 = document.getElementById("mode");
  if (mode == "🌚") {
    val.style.backgroundColor = "black";
    val.style.color = "white";
    value1.innerText = "🌞";
  } else {
    val.style.backgroundColor = "white";
    val.style.color = "black";
    value1.innerText = "🌚";
  }
}
