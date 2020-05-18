import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import PlayersForm from '../players-form';
import TicTacToe from '../tic-tac-toe';

const Game = () => (
    <Router>
        <Switch>
            <Route path="/game">
                <TicTacToe />
            </Route>
            <Route path="/">
                <PlayersForm />
            </Route>
        </Switch>
    </Router>
);

export default Game;