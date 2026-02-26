import { Board } from "@/features/tic-tac-toe/components/Board";

export default function TicTacToe() {
  let nextPlayer = "X";
  return (
    <section
      className="w-80 h-80 m-auto"
    >


        <Board />

    </section>
  );
}
