type Props = {
  value: string | null
  onClick: () => void
}

export function Square({ value, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="h-20 w-20 bg-green-400 border text-2xl font-bold flex items-center justify-center"
    >
      {value}
    </button>
  )
}
