"use client"

import { useState } from "react"
import { BoardState, Player } from "../tic-tac-toe.types"
import { checkWinner, createBoard, isDraw } from "../utils/gameEngine"

export function useTicTacToe() {
  const [board, setBoard] = useState<BoardState>(createBoard())
  const [player, setPlayer] = useState<Player>("X")

  const winner = checkWinner(board)
  const draw = isDraw(board)

  function handleMove(index: number) {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = player

    setBoard(newBoard)
    setPlayer(player === "X" ? "O" : "X")
  }

  function reset() {
    setBoard(createBoard())
    setPlayer("X")
  }

  return {
    board,
    player,
    winner,
    isDraw: draw,
    handleMove,
    reset,
  }
}
