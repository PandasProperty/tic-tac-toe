export const checkForWinners = (board) => {
    for (let i=0; i<3; i++) {
        if (board[i][0] !== null && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            return board[i][0];
        }
        if (board[0][i] !== null && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
            return board[0][i];
        }
    }
    if (board[0][0] !== null && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        return board[0][0];
    }
    if (board[0][2] !== null && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        return board[0][2];
    }
    return false;
};

export const tableIsFull = (board) => {
    for (let i=0; i<3; i++) {
        for (let j=0; j<3; j++) {
            if (board[i][j] === null) {
                return false;
            }
        }    
    }
    return true;
};
