import { Player } from "../tic-tac-toe.types"

type Props = {
  currentPlayer: Player
  winner: Player | null
  isDraw: boolean
  onReset: () => void
}

export function GameStatus({
  currentPlayer,
  winner,
  isDraw,
  onReset,
}: Props) {
  let message: string

  if (winner) {
    message = `Winner: ${winner}`
  } else if (isDraw) {
    message = "It's a draw!"
  } else {
    message = `Current Player: ${currentPlayer}`
  }

  return (
    <div className="flex flex-col items-center gap-4 mt-4">
      <p className="text-lg font-semibold">{message}</p>

      {(winner || isDraw) && (
        <button
          onClick={onReset}
          className="px-4 py-2 border rounded hover:bg-gray-100"
        >
          Play Again
        </button>
      )}
    </div>
  )
}
