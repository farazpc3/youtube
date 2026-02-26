

type Props = {
  value: string | null
  onClick: () => void
}

export function Square({ value, onClick }: Props) {

  return (
<button
  onClick={onClick}
  className="h-20 w-20 bg-green-400 border-2 border-black rounded-lg text-2xl font-bold flex items-center justify-center cursor-pointer hover:border-4 hover:bg-green-600"
>
  {value}
</button>

  )
}
