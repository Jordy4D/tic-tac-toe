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
        const topLeft = gameController.controllerBoard[0][0];
        const topMid = gameController.controllerBoard[0][1];
        const topRight = gameController.controllerBoard[0][2];
        const midLeft = gameController.controllerBoard[1][0];
        const midMid = gameController.controllerBoard[1][1];
        const midRight = gameController.controllerBoard[1][2];
        const botLeft = gameController.controllerBoard[2][0];
        const botMid = gameController.controllerBoard[2][1];
        const botRight = gameController.controllerBoard[2][2];

        const horizontalWin = ( topLeft && topMid && topRight ||
                                midLeft && midMid && midRight ||
                                botLeft && botMid && botRight )

        const veritcalWin = (   topLeft && midLeft && botLeft ||
                                topMid && midMid && botMid ||
                                topRight && midRight && botRight )

        const diagonalWin = (   topLeft && midMid && botRight || 
                                botLeft && midMid && topRight )

        
        // for (let i = 0 ; i <= gameController.controllerBoard.length ; i++) {
        //     for (let j = 0 ; j <= gameController.controllerBoard.length ; j++) {
        //         if (gameController.controllerBoard[i][j] === '') {
        //             continue;
        //         } else {
        //             console.log(`it's a tie!`)
        //         }
        //     }
        // }

        if (horizontalWin === ( players[0].mark || players[1].mark ) ) {
                        
            console.log(`${getActivePlayer().name} is the winner!`)
        
        } else if ( veritcalWin === ( players[0].mark || players[1].mark )) {
                        
            console.log(`${getActivePlayer().name} is the winner!`)
    
        } else if ( diagonalWin === ( players[0].mark || players[1].mark ) ) {
                        
            console.log(`${getActivePlayer().name} is the winner!`)
        } 
        
        
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

