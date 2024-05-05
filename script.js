const gameboard = (function() {
    const rows = 3;
    const cols = 3;
    const board = [];

    for (let i = 0 ; i < rows ; i++ ) {
        board[i] = [];
        for (let j = 0 ; j < cols ; j++) {
            board[i].push('');
        }
    }

    
    const getBoard = () => board;


    const addMark = (row, col, mark) => {
        // board.filter((element) => element[row][col] = "X")

        if (board[row][col] !== '') {
            console.log("choose another space");
        } else {
            board[row][col] = mark;
            console.table(gameboard.board);

        }

    }


    return { getBoard, addMark };

})();

function createPlayer (name, mark) {
    
    if (gameController.players.length >= 2) {
        console.log('Two players already playing');
        return;
    } 
    gameController.players.push({ name, mark });
    
    
    // const allPlayers = [];
    
     
    return { allPlayers, newPlayer }

}; 

const gameController = (function (
    playerOneName = "Player One",
    playerTwoName = "Player Two"

) {
    
    const controllerBoard = gameboard.getBoard();

    // const players = Player.allPlayers;

    const players = [
        { name: playerOneName, mark: "X" },
        { name: playerTwoName, mark: "O" }
    ]

    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];

    };

    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        controllerBoard;
        console.log(`${getActivePlayer().name}'s turn.`);
    }

    const playRound = (row, col) => {
        console.log(
            `Adding ${getActivePlayer().name}'s value to the board.`
        )
        gameboard.addMark(row, col, getActivePlayer().mark);
    
        getWinner();
        switchPlayerTurn();
        printNewRound();    
    };

    
    
    
    const getWinner = () => {

        const horizontalWin = ( gameboard.getBoard()[0].join() ||
                                gameboard.getBoard()[1].join() ||
                                gameboard.getBoard()[2].join() )

        const veritcalWin = (   gameboard.getBoard().map(x => x[0]).join() ||
                                gameboard.getBoard().map(x => x[1]).join() ||
                                gameboard.getBoard().map(x => x[2]).join() )

        const diagonalWin = [];    

        const x = players[0].mark;
        const o = players[1].mark;

        // gameboard.getBoard().map(x => x[1]).join() === "O,X,O" // takes column 2 value, reduces to values, and compares to the string


        // for (let i = 0 ; i <= gameController.controllerBoard.length ; i++) {
        //     for (let j = 0 ; j <= gameController.controllerBoard.length ; j++) {
        //         if (gameController.controllerBoard[i][j] === '') {
        //             continue;
        //         } else {
        //             console.log(`it's a tie!`)
        //         }
        //     }
        // }

        // can't do this tie function
        if ( (gameController.controllerBoard[0].includes('') ||
            gameController.controllerBoard[1].includes('') ||
            gameController.controllerBoard[2].includes('') ) === false ) {
                console.log('tie!')
        
        } else if (horizontalWin === ( "X,X,X" || "O,O,O" ) ) {
                        
            console.log(`${getActivePlayer().name} is the winner!`)
        
        } else if ( veritcalWin === ( "X,X,X" || "O,O,O" )) {
                        
            console.log(`${getActivePlayer().name} is the winner!`)
    
        } else if ( diagonalWin === ( "X,X,X" || "O,O,O" ) ) {
                        
            console.log(`${getActivePlayer().name} is the winner!`)
        } else if (
            (gameController.controllerBoard[0] && 
            gameController.controllerBoard[1] &&
            gameController.controllerBoard[2]) === false ) {
                console.log(`Tie!`)

            }
        
        console.table(gameController.controllerBoard)
        
    }

    printNewRound();
    
    return { players, 
        activePlayer, 
        controllerBoard,
        playRound,
        switchPlayerTurn, 
        getActivePlayer,
        getWinner
        };


})();

gameboard
gameController

