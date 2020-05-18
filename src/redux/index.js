import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger'

import ticTacToeReducer from './tic-tac-toe';

export const reducer = combineReducers({
    ticTacToe: ticTacToeReducer
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;