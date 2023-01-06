const gameBoard = () => {
    let board = [null, null, null, null, null, null, null, null, null];

    const getField = (i) => {
        return board[i];
    }

    const clearBoard = () => {
        board = [null, null, null, null, null, null, null, null, null];
    }
    
    const playField = (i, player) => {
        const boardField = document.querySelector(`.board button:nth child(${i + 1}) p`);
        boardField.textContent = player.getSign();
        board[i] = player.getSign();
    }

    const simulateField = (i, player) => {
        board[i] = player.getSign();
    }
    
    const legalMoves = () => {
        let moves = []
        for (let i = 0; i < 9; i++) {
            if (board[i] === null) {
                moves.push(i);
            }
        }
        return moves;
    }

    return {getField, clearBoard, playField, simulateField, legalMoves}
}

const player = (sign) => {
    let playerSign = sign;

    const getSign = () => {
        return playerSign;
    }
    const setSign = (sign, selected) => {
        playerSign = sign;
        const selectedButton = document.querySelector(`.btn.${sign}`);

        if(selected) {
            selectedButton.classList.add('seleceted');
        } else {
            selectedButton.classList.remove('selected');
        }
    }

    return {getSign, setSign}
}

const aiLogic = ((threshold) => {
    let minimaxProbability = threshold; 

    const setProbability = (threshold) => {
        minimaxProbability = threshold;
    }

    const minimax = (simBoard, player) => {
        // Check for win
        if (gameController.checkWin(simBoard)) {
            if () {
                
            }

        } else if (gameController.checkDraw(simBoard)) {
            return 0;
        } else {
            let moves = simBoard.
            for (let i = 0; )
        }
        

        // Continue recursive call
        


    }

    const selectMove = () => {
        const generatedValue = Math.floor(Math.random() * (101))
        let selectedMove = null;
        
        if (generatedValue <= minimaxProbability) {
            console.log("Minimax Move");
            let simBoard = gameboard();
            
            for()

            selectedMove = minimax(simBoard, gameController.aiPlayer.getSign());


        }else{
            console.log("Random Move");
            const availableMoves = gameBoard.legalMoves();
            selectedMove = gameBoard[Math.floor(Math.random() * (availableMoves.length))];
        }

        return selectedMove;
    }

})(0);

const gameController = (() => {
    const humanPlayer = player('x');
    const aiPlayer = player('o');
    

    const checkRows = (board) => {
        for(let i = 0; i < 3; i++) {
            let row = []
            for (let j = (i*3); j < (j+3); j++) {
                row.push(board.getField(j));
            }
            if (row.every(field => field == 'x') || row.every(field => field == 'o')) {
                return true;
            }
        }
        return false;
    }

    const checkColumns = (board) => {
        for (let i = 0; i < 3; i++) {
            let col = [];
            for (let j = 0; j < 3; j++) {
                col.push(board.getField((j + (i*3))));
            }
            if (col.every(field => field == 'x') || col.every(field => field == 'o')) {
                return true;
            }
        }
        return false;
    }

    const checkDiagonals = (board) => {
        let diagonal1 = [board.getField(0),board.getField(4),board.getField(8)];
        let diagonal2 = [board.getField(2),board.getField(4),board.getField(6)];
        
        if (diagonal1.every(field => field == 'x') || diagonal1.every(field => field == 'o')) {
            return true;
        }

        if (diagonal2.every(field => field == 'x') || diagonal2.every(field => field == 'o')) {
            return true;
        }

        return false;
    }

    const checkWin = (board) => {
        if(checkColumns(board) || checkRows(board) || checkDiagonals(board)){
            return true;
        }
        return false;
    }

    const checkDraw = (board) => {
        if (checkWin(board)) {
            return false;
        } else {
            for (let i = 0; i < 9; i++) {
                if (board.getField(i) === null) {
                    return false;
                }
            }
            return true;
        }
    }

    const setSign = (sign) => {
        if (sign == 'x') {

        }
    }

    const playerTurn = (i) => {
        const field = board.getField(i);
        if (field == null) {
            gameBoard.playField(i,humanPlayer);

        }
    }

    const aiTurn = (i) => {

    }

    return {checkWin, checkDraw, setSign, playerTurn, aiTurn}
})();


const displayController = (() => {
    const displayBoard = Array.from(document.querySelectorAll('button.field'));
    const gameBoard = gameBoard();
    const difficulty = document.querySelector('.form')


    const setDifficulty = () => {
        const difficulty = document.querySelector('#levels').ariaValueMax;
        if (difficulty == 'easy') {

        } else if (difficulty == 'medium') {

        } else if (difficulty == 'hard') {

        } else if (difficulty == 'impossible') {

        }
        gameController.restart();
    }

    const clearDisplayBoard = () => {
        displayBoard
    }


    const initializer = (() => {
        for (let i = 0; i < 9; i++) {
            field = displayBoard[i];
            field.addEventListener('click', )
        }
    })();

})();