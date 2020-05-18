import { cloneDeep } from 'lodash';
import {
    defaultState,
    setPlayerNamesReducer,
    moveReducer,
    newGameReducer,
    restartGameReducer
} from './tic-tac-toe';

describe('Testing redux for tic-tac-toe', () => {
    
    const initialState = cloneDeep(defaultState);
    let state = cloneDeep(defaultState);

    const testForlayerNames = {
        0: 'Anda',
        1: 'Vlad'
    };

    it('Setting player names', () => {
        state = setPlayerNamesReducer(state, {
            payload: testForlayerNames
        });
        const {
            board, firstPlayer, gameOn, tableIsFull,
            currentPlayer, playerNames, content, colors
        } = state;
        expect(board).toEqual(initialState.board);
        expect(gameOn).toEqual(true);
        expect(tableIsFull).toEqual(false);
        expect(firstPlayer).toEqual(currentPlayer);
        expect(playerNames).toEqual(testForlayerNames);
        expect(content).toEqual({
            [firstPlayer]: 'X',
            [1-firstPlayer]: '0'
        });
        expect(colors).toEqual(initialState.colors);
    });

    it('Make moves', () => {
        const player = state.firstPlayer;
        state = moveReducer(state, {
            payload: {
                column: 0,
                row: 0
            }
        });
        expect(state.board[0][0]).toEqual(player);
        state = moveReducer(state, {
            payload: {
                column: 1,
                row: 1
            }
        });
        expect(state.board[1][1]).toEqual(1 - player);
        state = moveReducer(state, {
            payload: {
                column: 0,
                row: 1
            }
        });
    });

    it('Restart Game', () => {
        state = restartGameReducer(state);
        const {
            board, firstPlayer, gameOn, tableIsFull,
            currentPlayer, playerNames, content, colors
        } = state;
        expect(board).toEqual(initialState.board);
        expect(gameOn).toEqual(true);
        expect(tableIsFull).toEqual(false);
        expect(firstPlayer).toEqual(currentPlayer);
        expect(playerNames).toEqual(testForlayerNames);
        expect(content).toEqual({
            [firstPlayer]: 'X',
            [1-firstPlayer]: '0'
        });
        expect(colors).toEqual(initialState.colors);
    });

    it('New Game', () => {
        state = newGameReducer(state);
        const getRestProps = (obj) => {
            const { colors, ...restProps } = obj;
            return restProps;
        };
        const initialStateRestProps = getRestProps(initialState);
        const stateRestProps = getRestProps(state);
        expect(initialStateRestProps).toEqual(stateRestProps);
    });

});
