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

function resetGame() {
    game = {
        A: [null, null, null],
        B: [null, null, null],
        C: [null, null, null]
    }

    player = 'x';

    document.getElementById('A0').innerText = '';
    document.getElementById('A1').innerText = '';
    document.getElementById('A2').innerText = '';

    document.getElementById('B0').innerText = '';
    document.getElementById('B1').innerText = '';
    document.getElementById('B2').innerText = '';
    document.getElementById('C0').innerText = '';
    document.getElementById('C1').innerText = '';
    document.getElementById('C2').innerText = '';
}