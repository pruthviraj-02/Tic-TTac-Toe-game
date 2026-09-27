let board = ["", "", "", "", "", "", "", "", ""];

let player = "X";

let gameOver = false;

let xScore = 0;
let oScore = 0;


function play(position) {

    if (gameOver == true) {
        return;
    }

    if (board[position] != "") {
        return;
    }

    board[position] = player;

    let buttons = document.querySelectorAll(".game button");

    buttons[position].innerText = player;


    if (player == "X") {
        buttons[position].classList.add("x");
    } else {
        buttons[position].classList.add("o");
    }


    let winningBoxes = checkWinner();

    if (winningBoxes != null) {

        document.getElementById("message").innerText =
            "🎉 Player " + player + " Wins!";

        gameOver = true;


        for (let i = 0; i < winningBoxes.length; i++) {
            buttons[winningBoxes[i]].classList.add("winner");
        }


        // Update score
        if (player == "X") {
            xScore++;
            document.getElementById("xScore").innerText = xScore;
        } else {
            oScore++;
            document.getElementById("oScore").innerText = oScore;
        }

        return;
    }


    // Check draw ONLY after checking winner
    if (!board.includes("")) {

        document.getElementById("message").innerText =
            "😅 It's a Draw!";

        gameOver = true;

        return;
    }


    // Change player
    if (player == "X") {
        player = "O";
    } else {
        player = "X";
    }


    document.getElementById("message").innerText =
        "Player " + player + "'s Turn";
}

function checkWinner() {

    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];


    for (let i = 0; i < wins.length; i++) {

        let a = wins[i][0];
        let b = wins[i][1];
        let c = wins[i][2];


        if (
            board[a] != "" &&
            board[a] == board[b] &&
            board[b] == board[c]
        ) {

            return [a, b, c];
        }
    }


    return null;
}


function restart() {

    board = ["", "", "", "", "", "", "", "", ""];

    player = "X";

    gameOver = false;


    let buttons = document.querySelectorAll(".game button");


    for (let i = 0; i < 9; i++) {

        buttons[i].innerText = "";

        buttons[i].classList.remove("x");
        buttons[i].classList.remove("o");
        buttons[i].classList.remove("winner");
    }


    document.getElementById("message").innerText =
        "Player X's Turn";
}