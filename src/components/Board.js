import React from 'react';
import Square from './Square';

export default function Board({ squares, onClick }) {
    return (
        <div className="board">
            {squares.map((squareValue, index) => {
                return (
                    <Square
                        key={index}
                        squareIndex={index}
                        value={squareValue}
                        onClick={onClick}
                    />
                )
            })}
        </div>
    );
};