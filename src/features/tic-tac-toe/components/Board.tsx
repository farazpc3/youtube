"use client"

import { useTicTacToe } from "../hooks/useTicTacToe"
import { GameStatus } from "./GameStatus"
import { Square } from "./Square"

export function Board() {
  const {
    board,
    player,
    winner,
    isDraw,
    handleMove,
    reset,
  } = useTicTacToe()

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="grid grid-cols-3 gap-2">
        {board.map((cell, index) => (
          <Square
            key={index}
            value={cell}
            onClick={() => handleMove(index)}
          />
        ))}
      </div>

      <GameStatus
        currentPlayer={player}
        winner={winner}
        isDraw={isDraw}
        onReset={reset}
      />
    </div>
  )
}
