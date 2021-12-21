import React from 'react';
import styles from './Square.module.css';

export default function Square({ squareIndex, value, onClick }) {
    return (
        <button
            className={styles.square}
            onClick={() => onClick(squareIndex)}
            disabled={value}
        >
            <span>{value}</span>
        </button>
    )
}