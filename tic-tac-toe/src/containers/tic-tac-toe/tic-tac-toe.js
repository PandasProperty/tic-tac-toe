import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import bemHelper from 'react-bem-helper';
import { map } from 'lodash';
import { move } from '../../redux/tic-tac-toe';
import Cell from '../../components/cell';
import ControlButtons from '../control-buttons/control-buttons';

require('./tic-tac-toe.scss');

const bem = bemHelper('tic-tac-toe');

const TicTacToe = () => {
    
    const ticTacToe = useSelector(state => state.ticTacToe);
    const {
        playerNames, currentPlayer, board, content,
        winner, firstPlayer, tableIsFull, colors, gameOn
    } = ticTacToe;

    const history = useHistory();

    useEffect(() => {
        if (!gameOn) {
            history.push('/');
        }
    }, [history, gameOn]);
    const dispatch = useDispatch();

    const onClick = (row, column) => () => {
        dispatch(move({ row, column }));
    };

    const secondPlayer = 1 - firstPlayer;

    const gameFinished = tableIsFull || winner !== false;


    return (
        <div {...bem()}>
            <div {...bem('players')}>
                {
                    map([firstPlayer, secondPlayer], (player) => (
                        <div
                            key={`player-${player}`}
                            {...bem('player')}
                            {...bem('player', currentPlayer === player && 'current')}
                            style={{ backgroundColor: colors[player] }}
                        >
                            <div className='text'>
                                {
                                    `Player ${content[player]} - ${playerNames[player]}`
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
            <div {...bem('container')}>
                {
                    map([0, 1, 2], (row) => (
                        <div key={`row-${row}`} {...bem('row')}>
                            { 
                                map([0, 1, 2], (column) => {
                                    const value = row * 3 + column;
                                    const status = board[row][column];
                                    const isFilled = status !== undefined;
                                    return (
                                        <Cell
                                            key={`cell-${value}`}
                                            onClick={onClick(row, column)}
                                            content={isFilled ? content[status] : ''}
                                            color={colors[status] || 'white'}
                                        />
                                    );
                                })
                            }
                        </div>
                    ))
                }
            </div>
            <ControlButtons />
            {
                gameFinished && (   
                    <div {...bem('winner-container')}>
                        <div {...bem('winner')}>
                            {
                                tableIsFull ? (
                                    <div {...bem('winner-name')}>
                                        We have a tie ...
                                    </div>
                                ) : (
                                    <>
                                        We have a winner:
                                        <div {...bem('winner-name')}>
                                            {playerNames[1 - currentPlayer]}
                                        </div>
                                    </>
                                )
                            }
                            <ControlButtons />
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default TicTacToe;