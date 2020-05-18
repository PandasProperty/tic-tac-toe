import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { map } from 'lodash';
import bemHelper from 'react-bem-helper';
import { setPlayerNames, newGame } from '../../redux/tic-tac-toe';
import InputName from '../../components/input-name';

require('./players-form.scss');

const bem = bemHelper('players-form');

const PlayersForm = () => {
    
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(newGame());
    }, [dispatch]);

    const colors = useSelector(state => state.ticTacToe.colors);
    const [players, updatePlayers] = useState({ 0: '', 1: '' });
    
    const onChange = (index) => (event) => {
        updatePlayers({
            ...players,
            [index]: event.target.value
        });
    };

    const handleStartGame = () => {
        dispatch(setPlayerNames(players));
        history.push('/game');
    };

    const checkForErrors = () => {
        let error = null;
        if (!players[0].length || !players[1].length) {
            error = 'Please enter the names for both players.';
        } else {
            if (players[0] === players[1]) {
                error = 'Please enter different names for the players.';
            }
        }
        return error;
    }

    const error = checkForErrors();
    
    return (
        <div {...bem()}>
            {
                map([0, 1], (player) => (
                    <InputName
                        key={player}
                        player={player}
                        color={colors[player]}
                        onChange={onChange(player)}
                        value={players[player]}
                    />
                ))
            }
            <button
                {...bem('button', error && 'disabled')}
                disabled={!!error}
                onClick={handleStartGame}
                title={error}
            >
                Start New Game
            </button>
        </div>
    );
};

export default PlayersForm;