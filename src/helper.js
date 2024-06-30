export default function isWinner(gameBoard, currentMove, currentPlayer) {
    let board = [...gameBoard]
    board[currentMove] = currentPlayer
    const winningCombination = [
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [9, 9, 10, 11],
        [12, 13, 14, 15],
        [0, 4, 8, 12],
        [1, 5, 9, 13],
        [2, 6, 10, 14],
        [3, 7, 11, 15],
        [0, 5, 10, 15],
        [3, 6, 9, 12]
    ]
    for (let index = 0; index < winningCombination.length; index++) {
        const [c1, c2, c3, c4] = winningCombination[index]
        if (board[c1] > 0 &&
            board[c1] === board[c2] &&
            board[c2] === board[c3] &&
            board[c3] === board[c4]) {
            return true
        }

    }
    return false
}
export function isDrawn(gameBoard, currentMove, currentPlayer) {
    let board = [...gameBoard]
    board[currentMove] = currentPlayer
    return board.includes(0)
}
const getPosition = (gameBoard, moveChecks) => {
    for (let check = 0; check < moveChecks.length; check++) {
        for (let i = 0; i < moveChecks[check].max; i += moveChecks[check].step) {
            let series = gameBoard[i + moveChecks[check].indexs[0]].toString() +
                gameBoard[i + moveChecks[check].indexs[1]].toString() +
                gameBoard[i + moveChecks[check].indexs[2]].toString() +
                gameBoard[i + moveChecks[check].indexs[3]].toString()
            switch (series) {
                case "1110":
                case "2220":
                    return i+moveChecks[check].indexs[3]
                case "1101":
                case "2202":
                    return i+moveChecks[check].indexs[2]
                case "0111":
                case "0222":
                    return i+moveChecks[check].indexs[0]
                default:
            }


        }

    }
    return -1;
}
export function getComputerMove(gameBoard) {
    let moveChecks = [
        // verticle checks 
        {
            indexs: [0, 4, 8, 12],
            max: 4,
            step: 1
        },
        // horizontal checks 
        {
            indexs: [0, 1, 2, 3],
            max: 16,
            step: 4
        },
        // digonal checks -1 
        {
            indexs: [0, 5, 10, 15],
            max: 16,
            step: 16
        },
        // digonal checks -2
        {
            indexs: [3, 6, 9, 12],
            max: 16,
            step: 16
        }
    ]
    let pos= getPosition(gameBoard,moveChecks)
    if (pos>-1) {
        return pos
    }
    return getComputerRandomMove(gameBoard)
}
function getComputerRandomMove(gameBoard) {
    let validMoves = []
    for (let i = 0; i < gameBoard.length; i++) {
        if (gameBoard[i] === 0) {
            validMoves.push(i)
        }
    }
    let randPos = Math.floor(Math.random() * validMoves.length)
    return validMoves[randPos]
}