export default function Loading() {
  let nextPlayer = "X";
  return (
    <section
      className="inline-grid m-auto border-4 border-solid border-black grid-cols-[1fr_300px] grid-rows-[2em_1fr]
  "
    >
      <header className="border-4 border-solid border-red-400 text-center bg-blue-300">
        <h2>Next Player {nextPlayer}</h2>
      </header>
      <aside className="border-solid border-4 border-brown-400 row-span-2 bg-gray-400 p-4">
        <ol>
          <li>hi</li>
        </ol>
      </aside>
      <div className="w-80 h-80 m-auto">
        {Array.from({ length: 9 }).map((_, i) => (
          <button
      className="aspect-square p-4 bg-green-400 border-solid border-black border-3 cursor-pointer hover:bg-green-600"

    >

    </button>
        ))}
      </div>
    </section>
  );
}
