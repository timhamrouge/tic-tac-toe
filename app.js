let game = {
    A: [null, null, null],
    B: [null, null, null],
    C: [null, null, null]
}

let player = "x";

function handleSquareClick(e) {
    const move = e.split("");

    game[move[0]][move[1]] = player;

    console.log(game);

    document.getElementById(e).innerText = player;



    if (player === "x") player = "o";
    else player = "x"
    console.log("e", e, player);
}