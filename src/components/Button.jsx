export function Button({ title, white }) {
  const colors = white ? 'bg-white text-black' : 'bg-black text-white'
  return (
    <button
      className={`${colors} rounded-md px-5 py-[10px] text-[15px] font-medium tracking-wide`}
    >
      {title}
    </button>
  )
}
