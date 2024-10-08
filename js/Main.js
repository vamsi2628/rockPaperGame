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
  msg.style.backgroundColor = "#c1885a";
  msg.style.color = "black";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerHTML = userScore;
    msg.innerHTML = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "#9fa9a9";
    msg.style.color = "black";
  } else {
    compScore++;
    compScorePara.innerHTML = compScore;
    msg.innerHTML = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "#f0e6b1";
    msg.style.color = "black";
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
