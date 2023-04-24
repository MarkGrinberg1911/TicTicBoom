import React, { useState } from 'react';

function Gameboard(props) {
    const [gameboard, setGameboard] = useState([[null, null, null], [null, null, null], [null, null, null]]);
    const [counter, setCounter] = useState(1)
    const playerSymbol = "X"
    function handleClick(cellIndex, rowIndex) {
        if (gameboard[rowIndex][cellIndex] !== null) {
            console.log("Error");
        } else {
            setCounter(counter + 1)
            const updatedGameboard = [...gameboard];
            updatedGameboard[rowIndex][cellIndex] = playerSymbol;
            setGameboard(updatedGameboard);
            if (counter > 4) {
                iswin() === true ? console.log("win") : null
            }
        }
    }
    function iswin(params) {
        for (let row = 0; row < gameboard.length; row++) {
            let rowcounter = 0
            for (let cell = 0; cell < gameboard[row].length; cell++) {
                gameboard[row][cell] == playerSymbol ? rowcounter++ : null
            }
        }
    }

    console.log(counter)
    return (
        <div className="flex justify-center">
            <div className="grid grid-rows-3 gap-4 mt-8">
                {gameboard.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex justify-center items-center h-32">
                        {row.map((cell, cellIndex) => (
                            <div key={`${rowIndex}-${cellIndex}`} className="border-2 border-gray-600 w-32 h-32 flex justify-center items-center text-6xl font-bold cursor-pointer hover:bg-gray-100"
                                onClick={() => handleClick(cellIndex, rowIndex)}>
                                {cell}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gameboard;
