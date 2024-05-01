const gameboard = (function() {
    const rows = 3;
    const cols = 3;
    const board = [];

    for (let i = 0 ; i < rows ; i++ ) {
        board[i] = [];
        for (let j = 0 ; j < cols ; j++) {
            board[i].push('')
        }
    }

    
    const getBoard = () => board;



    const addMark = (row, col) => {
        // board.filter((element) => element[row][col] = "X")
        
        if (board[row][col] !== '') {
            console.log("choose another space")
        } else {
            board[row][col] = "x"
            console.table(gameboard.board)

        }

    }

    // const printBoard = () => {
    //     const boardWithOpenCells = board.map((row) => row.map((cell) => cell.getValue()))
    //     console.log(boardWithOpenCells);
    // }

    return { board, addMark };

})();



const Player = (function() {
    
    const allPlayers = []


    
    // need to work out preventing more players in array
    if (allPlayers.length >= 3) {
        console.log('Two players already playing')
    } 
    
    const newPlayer = (name, mark) => allPlayers.push({ name, mark })
    
    
    return { allPlayers, newPlayer }

})(); 

// function GameLogic (
//     playerOneName = "Player One",
//     playerTwoName = "Player Two"
// ) {
//     const board = Gameboard();


//     let activePlayer = players[0];

//     const switchPlayerTurn = () => {
//         activePlayer = activePlayer === players[0] ? players[1] : players[0];
//     }

//     const getActivePlayer = () => activePlayer;

//     const printNewRound = () => {
//         boardArr.printBoard();
//         console.log(`${getActivePlayer().name}'s turn.`)
//     }

//     const playRound = () => {
//         console.log(
//             `Adding ${getActivePlayer().name}'s value to the board.`
//         )
//         board.playerMark(row, col, getActivePlayer().value);
    
//         switchPlayerTurn();
//         printNewRound();    
// };

// printNewRound();
    
// return {
//     playRound,
//     getActivePlayer
// };


// }

// Gameboard();

// const game = GameLogic();

// game();