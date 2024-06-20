
import React, { useState } from 'react';

export function CheckingNumber() {
    const [click, setClick] = useState([]);

    const addNumber = () => {
        setClick([
            ...click,//this will update the number again and gain in new row
            {
                id: click.length,
                value: Math.floor(Math.random() * 10)
            }
        ]);
    };

    return (
        <div>
            <ul>
                {click.map(item => (<li key={item.id}>{item.value}</li>))}
            </ul>
            <button onClick={addNumber}>
                Click me
            </button>
        </div>
    );
}