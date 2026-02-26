import { BoardState, Player } from "../tic-tac-toe.types"

export function createBoard(): BoardState {
  return Array(9).fill(null)
}

export function checkWinner(board: BoardState): Player | null {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6],
  ]

  for (const [a,b,c] of lines) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }

  return null
}

export function isDraw(board: BoardState): boolean {
  return board.every(cell => cell !== null) && !checkWinner(board)
}
