const gameboard = (function() {
    const rows = 3;
    const cols = 3;
    const board = [];

    const boardStart = () => {        
        for (let i = 0 ; i < rows ; i++ ) {
            board[i] = [];
            for (let j = 0 ; j < cols ; j++) {
                board[i].push('');

            }
        }
    }   

    
    const getBoard = () => board;


    const addMark = (row, col, mark) => {

        if (board[row][col] !== '') {

        } else {
            board[row][col] = mark;
            getDisplay.displayXO(row, col);
        }

    }

    boardStart();

    return { getBoard, addMark, boardStart };

})();

const playerController = (function () {
    

    const getPlayerOneName = () => {
        let playerOneName = prompt(`What is Player One's name?`, 'Player One')
        if (playerOneName === '' || playerOneName === null) {
            return playerOneName = `Player One`
        } 
        gameController.players[0].name = playerOneName;
        getDisplay.displayPlayerOneName();
    }
    
    const getPlayerTwoName = () => {
        let playerTwoName = prompt(`What is Player Two's name?`, 'Player Two')
        if (playerTwoName === '' || playerTwoName === null) {
            return playerTwoName = `Player One`
        } 
        gameController.players[1].name = playerTwoName;
        getDisplay.displayPlayerTwoName();
    }
    



     
    return { getPlayerOneName, getPlayerTwoName }

})(); 

const gameController = (function () {
    
    const controllerBoard = gameboard.getBoard();


    const players = [
        { name: "Player One", mark: "X" },
        { name: "Player Two", mark: "O" }
    ]

    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];

    };

    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        controllerBoard;
    }

    const playRound = (row, col) => {

        if (getDisplay.winner.textContent !== '' ) {
            alert(`We have a winner! Press Reset to Start a New Game.`)
            return;
        }

        if (gameboard.getBoard()[row][col] !== "") {
            return alert(`Choose an open square!`);

        } else {
            gameboard.addMark(row, col, getActivePlayer().mark);

        }
    
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
        


        
        if ( horizontalWin.includes("X,X,X") || horizontalWin.includes("O,O,O") ) {
                        
            getDisplay.winner.textContent = `${getActivePlayer().name} is the winner!`
        
        } else if ( veritcalWin.includes("X,X,X") || veritcalWin.includes("O,O,O") ) {
                        
            getDisplay.winner.textContent = `${getActivePlayer().name} is the winner!`
    
        } else if ( diagonalWin.includes("X,X,X")  || diagonalWin.includes("O,O,O") ) {
                        
            getDisplay.winner.textContent = `${getActivePlayer().name} is the winner!`

        } else if ( (gameboard.getBoard()[0].includes('') === false ) && 
                    (gameboard.getBoard()[1].includes('') === false ) && 
                    (gameboard.getBoard()[2].includes('')  === false) ) {
                        getDisplay.winner.textContent = `Tie!`
        } 
    }
    

    const boardReset = () => {
        gameboard.boardStart();
        getDisplay.winner.textContent = '';
        document.querySelectorAll('.boardSquare').forEach(function(div) {
            div.textContent = '';
        })
        activePlayer = players[0];
    }

    printNewRound();
    
    return { players, 
        activePlayer, 
        controllerBoard,
        playRound,
        switchPlayerTurn, 
        getActivePlayer,
        getWinner,
        boardReset
        
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
    const playerOneDisplay = document.createElement('div')
    const playerTwoDisplay = document.createElement('div')

    playerNames.classList.add('playersContainer')
    playerOneDisplay.classList.add('playerNames')
    playerTwoDisplay.classList.add('playerNames')

    playerOneDisplay.textContent = `Player One (X): `
    playerTwoDisplay.textContent = `Player Two (O): `


    const winner = document.createElement('div')
    winner.classList.add('winner')
    winner.textContent = ``

    const btnGroup = document.createElement('div')
    btnGroup.classList.add('btnGroup')

    const getPlayerOneName = document.createElement('button')
    getPlayerOneName.classList.add('nameBtn')
    getPlayerOneName.textContent = `Add Player One`
    
    const getPlayerTwoName = document.createElement('button')
    getPlayerTwoName.classList.add('nameBtn')
    getPlayerTwoName.innerText = 'Add Player Two';

    const btnNameGroup = document.createElement('div')
    btnNameGroup.classList.add('btnNameGroup')

    const resetBtn = document.createElement('button')
    resetBtn.classList.add('resetBtn')
    resetBtn.textContent = 'RESET'

    document.body.appendChild(container)
    container.appendChild(info)
    info.appendChild(playerNames)
    info.appendChild(winner)
    info.appendChild(btnGroup)
    btnNameGroup.appendChild(getPlayerOneName)
    btnNameGroup.appendChild(getPlayerTwoName)
    btnGroup.appendChild(btnNameGroup)
    btnGroup.appendChild(resetBtn)
    container.appendChild(board)
    playerNames.appendChild(playerOneDisplay)
    playerNames.appendChild(playerTwoDisplay)
    
    
    const displayPlayerOneName = () => {
        playerOneDisplay.textContent = `Player One (X): ${gameController.players[0].name}`

    }

    const displayPlayerTwoName = () => {
        playerTwoDisplay.textContent = `Player Two (O): ${gameController.players[1].name}`

    }


    
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
        
        if ( squareInsert.textContent !== "" ) {
            alert("Choose an open space!")
            return
        } else {
            squareInsert.innerHTML = `<span>${gameController.getActivePlayer().mark}</span>`

        }
        
    }
    
    const xoSquare = document.querySelectorAll('.boardSquare').forEach(function(div) {
        div.addEventListener("click", () => {
            const square = div.id
            const coordinates =  square.slice(6).split('')
            const targetRow = coordinates[0]
            const targetCol = coordinates[1]
            
            gameController.playRound(targetRow, targetCol);
        });
        
    })
    
    getPlayerOneName.addEventListener('click', () => {
        playerController.getPlayerOneName();

    })

    getPlayerTwoName.addEventListener('click', () => {
        playerController.getPlayerTwoName();

    })

    resetBtn.addEventListener('click', () => {
        gameController.boardReset();
    })



    return { displayXO, winner, xoSquare, displayPlayerOneName, displayPlayerTwoName };

})();


gameboard
gameController
getDisplay



