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

    
    // const getBoard = () => board;


    const addMark = (row, col) => {
        // board.filter((element) => element[row][col] = "X")
        
        if (board[row][col] !== '') {
            console.log("choose another space")
        } else {
            board[row][col] = "x"
            console.table(gameboard.board)

        }

    }


    return { board, addMark };

})();



const Player = (function() {
    
    const allPlayers = []
    
    const newPlayer = (name, mark) => {
        if (allPlayers.length >= 2) {
            console.log('Two players already playing')
            return;
        } 
        
        allPlayers.push({ name, mark })
    
    }
     
    return { allPlayers, newPlayer }

})(); 

// function GameLogic (
//     playerOneName = Player.allPlayers[0].name,
//     playerTwoName = Player.allPlayers[1].name
//     ) {
//     const board = gameboard();


//     let activePlayer = Player.allPlayers[0];

//     const switchPlayerTurn = () => {
//         activePlayer = activePlayer === Player.allPlayers[0] ? Player.allPlayers[1] : Player.allPlayers[0];
//     }

//     const getActivePlayer = () => activePlayer;

//     const printNewRound = () => {
//         board.printBoard();
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