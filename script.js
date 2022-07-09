function chooseWinner(player, computer) {
    if (computer === player) {
        return 0;
    }
    if (player === 0) {
        return (computer === 1) ? 1 : -1;
    }
    if (player === 1) {
        return (computer === 2) ? 1 : -1;
    }
    return (computer == 0) ? 1 : -1;
}

function showPick(name, pickNum) {
    let pick = "rock";
    if (pickNum === 1) {
        pick = "paper";
    } else if (pickNum === 2) {
        pick = "scissors";
    }
    alert(`${name} chose ${pick}`);
}

function singleRound() {
    let player = Number(prompt("Enter 0 for rock, 1 for paper and 2 for scissors"));
    if (player === NaN || player < 0 || player > 2) {
        alert("Please enter allowed numbers only");
        return false;
    }
    let computer = Math.floor(Math.random() * 3);
    showPick("Player", player);
    showPick("Computer", computer);
    
    let result = chooseWinner(player, computer);
    switch (result) {
        case -1:
            alert("Player won");
            return true;
        case 0:
            alert("Draw");
            return true;
        case 1:
            alert("Computer won");
            return true;
    }   
}

function game() {
    let count = NaN;
    while (isNaN(count)) {
        count = Number(prompt("How many games would you like to play?"));
        if (isNaN(count)) {
            alert("Enter numbers only");
        }
    }
    for (let i = 0; i < count; i++) {
        singleRound();
    }
}

game()