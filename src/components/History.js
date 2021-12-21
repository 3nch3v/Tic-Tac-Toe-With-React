import React from 'react';

export default function History({ history }) {
    return (
        <ol>
            {history.map((x, i) => <li key={i}>{x}</li>)}
        </ol>
    );
}