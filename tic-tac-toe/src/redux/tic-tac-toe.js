import { createAction, handleActions } from 'redux-actions';
import { random, cloneDeep } from 'lodash';
import { checkForWinners, tableIsFull } from '../utils';
import { pickColors } from '../utils/colors';

export const ACTION_SET_PLAYER_NAMES = 'ACTION_SET_PLAYER_NAMES';
export const ACTION_MOVE = 'ACTION_MOVE';
export const ACTION_NEW_GAME = 'ACTION_NEW_GAME';
export const ACTION_RESTART_GAME = 'ACTION_RESTART_GAME';

export const defaultState = {
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],
    firstPlayer: null,
    gameOn: false,
    tableIsFull: false,
    currentPlayer: null,
    playerNames: {},
    content: {},
    colors: pickColors()
};

export const setPlayerNames = createAction(ACTION_SET_PLAYER_NAMES);
export const move = createAction(ACTION_MOVE);
export const newGame = createAction(ACTION_NEW_GAME);
export const restartGame = createAction(ACTION_RESTART_GAME);

export const setPlayerNamesReducer = (state, { payload }) => {
    const player = random(0, 1);
    return {
        ...state,
        playerNames: { ...payload },
        currentPlayer: player,
        content: {
            [player]: 'X',
            [1 - player]: '0'
        },
        firstPlayer: player,
        gameOn: true,
        winner: false 
    };
};

export const moveReducer = (state, { payload: { row, column }}) => {
    const board = cloneDeep(state.board);
    board[row][column] = state.currentPlayer;

    return {
        ...state,
        board,
        currentPlayer: 1 - state.currentPlayer,
        winner: checkForWinners(board),
        tableIsFull: tableIsFull(board)
    };
};

export const newGameReducer = () => {
    const state = cloneDeep(defaultState);
    state.colors = pickColors();
    return state;
};

export const restartGameReducer = (state) => {
    const player = random(0, 1);
    return ({
        ...state,
        board: cloneDeep(defaultState.board),
        currentPlayer: player,
        content: {
            [player]: 'X',
            [1 - player]: '0'
        },
        firstPlayer: player,
        gameOn: true,
        winner: false,
        tableIsFull: false
    });
};

const reducer = handleActions(
    {
        [setPlayerNames]: setPlayerNamesReducer,
        [move]: moveReducer,
        [newGame]: newGameReducer,
        [restartGame]: restartGameReducer
    },
    defaultState
);

export default reducer;
