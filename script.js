function gameLoop() {
    let playerButtons = document.querySelectorAll(".pick.player");

    playerButtons.forEach( btn => {
        btn.addEventListener("click", (event) => {
            removeAllCurrent();
            singleRound(event, btn);
        });
    });
}

function removeAllCurrent() {
    let buttons = document.querySelectorAll(".pick");
    for (const button of buttons) {
        if (button.classList.contains("current")) {
            button.classList.remove("current");
        }
    }
}

function singleRound(event, playerBtn) {
    let playerPick = playerBtn.getAttribute("data-pick");
    let computerPick = computerChoose();
    const computerBtn = document.querySelector(`.pick.computer[data-pick="${computerPick}"]`);
    playerBtn.classList.add("current");
    computerBtn.classList.add("current");

    let result = chooseWinner(playerPick, computerPick);
    if (result !== "draw") {
        increaseScore(result);
    }
    showResult(result);
}

function increaseScore(target) {
    const scoreText = document.querySelector(`.card.${target} h5`);
    let score = parseInt(scoreText.textContent.match(/\d+/)[0]); 
    scoreText.textContent = `Score: ${score + 1}`;
}

function showResult(result) {
    const resultDiv = document.querySelector(".result");
    switch (result) {
        case "player" :
            resultDiv.textContent = "You have won!";
            break;
        case "computer":
            resultDiv.textContent = "You have lost!";
            break;
        default:
            resultDiv.textContent = "Draw!"
    }
}

function computerChoose() {
    const picks = ["rock", "paper", "scissors"];
    let index = Math.floor((Math.random() * 3));
    return picks[index];
}

function chooseWinner(player, computer) {
    if (computer === player) {
        return "draw";
    }
    if (player === "rock") {
        return (computer === "paper") ? "computer" : "player";
    }
    if (player === "paper") {
        return (computer === "scissors") ? "computer" : "player";
    }
    return (computer == "rock") ? "computer" : "player";
}


gameLoop();
