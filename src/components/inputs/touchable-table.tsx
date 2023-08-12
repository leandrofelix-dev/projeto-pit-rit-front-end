interface ITouchableTable {
  id: string
  options: String[]
}

export const TouchableTable = ({id, options}: ITouchableTable) => {
  function handleTouchTable(e: any) {
    e.preventDefault()
    console.log('clicado')
  }
  return (
    <select className="border border-zinc-200 rounded-sm p-2 text-zinc-600 outline-none focus:shadow-[0_0_0_2px] focus:shadow-zinc-500" 
    onClick={handleTouchTable}>
      <option value="">Clique aqui...</option>
        {
          options.map((option, index) => (
            <option key={index} id={`${id}-${index}`}>{option}</option>
          ))
        }
    </select>
  )
}