import React, { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const handleCellClick = (index) => {
    // Check if the cell is already occupied or if the game is over
    if (board[index] || calculateWinner(board)) {
      return;
    }

    // Update the board with the current player's symbol
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    // Switch to the next player
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const renderCell = (index) => {
    return (
      <div className="cell" onClick={() => handleCellClick(index)}>
        {board[index]}
      </div>
    );
  };

  const winner = calculateWinner(board);

  return (
    <div className="tictactoe">
      <div className="board">
        {board.map((cell, index) => renderCell(index))}
      </div>
      {winner && <div className="winner">Winner: {winner}</div>}
    </div>
  );
};

// Function to calculate the winner
const calculateWinner = (board) => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
};

export default TicTacToe;
