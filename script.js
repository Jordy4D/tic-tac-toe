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
            getDisplay.displayXO(row, col);
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
        const diagForwArr = [];
        const diagRevArr = [];

        for (let i = 0, j = 2 ; i <= 2 ; i++, j--) {
            diagForwArr.push(gameController.controllerBoard[i][i])
            diagRevArr.push(gameController.controllerBoard[i][j])
        }

        

        const horizontalWin = [
            gameboard.getBoard()[0].join(),
            gameboard.getBoard()[1].join(),
            gameboard.getBoard()[2].join() 
        ]

        const veritcalWin = [
            gameboard.getBoard().map(x => x[0]).join(),
            gameboard.getBoard().map(x => x[1]).join(),
            gameboard.getBoard().map(x => x[2]).join()
        ]

        const diagonalWin = [
            diagForwArr.join(),
            diagRevArr.join()    
        ] 
        


        // const x = players[0].mark;
        // const o = players[1].mark;


        
        if ( horizontalWin.includes("X,X,X") || horizontalWin.includes("O,O,O") ) {
                        
            // console.log(`${getActivePlayer().name} is the winner!`)
            // winner = getDisplay.winner
            // const horWinner = document.getElementsByClassName('winner')
            getDisplay.winner.textContent = `${getActivePlayer().name} is the winner!`
            // winner.appendChild(horWinner)
        
        } else if ( veritcalWin.includes("X,X,X") || veritcalWin.includes("O,O,O") ) {
                        
            // console.log(`${getActivePlayer().name} is the winner!`)
            getDisplay.winner.textContent = `${getActivePlayer().name} is the winner!`
    
        } else if ( diagonalWin.includes("X,X,X")  || diagonalWin.includes("O,O,O") ) {
                        
            // console.log(`${getActivePlayer().name} is the winner!`)
            getDisplay.winner.textContent = `${getActivePlayer().name} is the winner!`

        } else if ( (gameboard.getBoard()[0].includes('') === false ) && 
                    (gameboard.getBoard()[1].includes('') === false ) && 
                    (gameboard.getBoard()[2].includes('')  === false) ) {
                        getDisplay.winner.textContent = `Tie!`
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
        getWinner,
        
        };


})();

const getDisplay = (function() {

    const displayBoard = gameboard.getBoard();

    const container = document.createElement('div')
    container.classList.add('container')

    const board = document.createElement('div')
    board.classList.add('gameboard')

    const info = document.createElement('div')
    info.classList.add('info')

    const playerNames = document.createElement('div')
    playerNames.classList.add('playerNames')
    playerNames.textContent = `${gameController.players[0].name} ${gameController.players[1].name}`

    const winner = document.createElement('div')
    winner.classList.add('winner')
    winner.textContent = ``
    

    document.body.appendChild(container)
    container.appendChild(info)
    info.appendChild(playerNames)
    info.appendChild(winner)
    container.appendChild(board)
    


    for (i in displayBoard) {
        for (j in displayBoard) {
            const boardSquare = document.createElement('div')
            boardSquare.classList.add(`boardSquare`)
            boardSquare.setAttribute("id", `square${i+j}`)
            board.appendChild(boardSquare)
        }
    }
    
    const displayXO = (row, col) => {

        const squareInsert = document.getElementById(`square${[row]+[col]}`)
        squareInsert.textContent = `${gameController.getActivePlayer().mark}`
                
    }
    
    // const playerNames = () => {
    //     const 

    // }

    return { displayXO, winner };

})();


gameboard
gameController
getDisplay

// horizontal win test
// gameController.playRound(0,0)
// gameController.playRound(1,0)
// gameController.playRound(0,1)
// gameController.playRound(2,2)
// gameController.playRound(0,2)

// vertical win test
// gameController.playRound(0,0)
// gameController.playRound(0,1)
// gameController.playRound(1,0)
// gameController.playRound(2,2)
// gameController.playRound(2,0)

// diagonal win test (second player)
// gameController.playRound(1,0)
// gameController.playRound(0,0)
// gameController.playRound(2,0)
// gameController.playRound(1,1)
// gameController.playRound(0,1)
// gameController.playRound(2,2)

// tie
// gameController.playRound(1,0)
// gameController.playRound(0,0)
// gameController.playRound(2,0)
// gameController.playRound(1,1)
// gameController.playRound(0,1)
// gameController.playRound(2,1)
// gameController.playRound(2,2)
// gameController.playRound(0,2)
// gameController.playRound(1,2)

