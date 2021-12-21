import React, { useState } from 'react';
import Board from './Board';
import History from './History';
import { calculateWinner } from '../util.js';

const initialSquares = [...Array(9).fill(null)];

export default function Game() {
    const [squares, setSquares] = useState(initialSquares);
    const [xIsNext, setXisNExt] = useState(true);
    const [history, setHistory] = useState([]);

    const player = xIsNext ? 'X' : 'O';
    const winner = calculateWinner(squares);
    const draw = !winner && !squares.includes(null);

    const handleClick = (squareIndex) => {
        if (winner) {
            return;
        }

        setSquares(squares.map((value, index) => {
            if (index === squareIndex) return player;
            return value;
        }));
        setHistory([...history, `Player "${player}" moves on field #${++squareIndex}`])
        setXisNExt(!xIsNext);
    };

    const onRestart = () => {
        setSquares(initialSquares);
        setHistory([]);
    }

    return (
        <>
            <h1>Tic-Tac-Toe created with React</h1>
            <div className="game-wrapper">
                <div>
                    <Board squares={squares} onClick={handleClick} />
                    <button className="restart-btn" onClick={() => onRestart()}>Restart</button>

                </div>
                <div className="history-list">
                    <History history={history} />
                    {winner && <h2>Player "{winner}" is the winner!</h2>}
                    {draw && <h2>No winner. Please restart the game.</h2>}
                </div>
            </div>
        </>
    );
}