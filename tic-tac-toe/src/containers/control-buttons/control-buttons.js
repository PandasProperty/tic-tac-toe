import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import bemHelper from 'react-bem-helper';
import { restartGame, newGame } from '../../redux/tic-tac-toe';

require('./control-buttons.scss');

const bem = bemHelper('control-buttons');

const ControlButtons = () => {
    const dispatch = useDispatch();
    
    const handleRestartGame = () => {
        dispatch(restartGame());
    };
    const history = useHistory();

    const handleNewGame = () => {
        dispatch(newGame());
        history.push('/');
    };

    return (
        <div {...bem()}>
            <button {...bem('button')} onClick={handleRestartGame}>Restart Game</button>
            <button {...bem('button')} onClick={handleNewGame}>New Game</button>
        </div>
    );
};

export default ControlButtons;