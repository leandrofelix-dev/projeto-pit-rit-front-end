import * as Label from '@radix-ui/react-label';

interface ISelectInputProps {
  label: string;
  options: String[]
  id: string
}

export const SelectInput = ({label, options, id}: ISelectInputProps) => {
  return (
    <div className="flex flex-col px-4">
      <Label.Root className="text-zinc-500 mb-1" 
        htmlFor={id}>
        {label}
      </Label.Root>
      <select id={id} name={id} className=" bg-white shadow-zinc-200 inline-flex px-3 py-2.5 rounded-sm text-zinc-400 shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-zinc-500 w-200 h-10">
        <option value="">Selecionar...</option>
        {
          options.map((option, index) => (
            <option key={index} id={`${id}-${index}`}>{option}</option>
          ))
        }
      </select>
    </div>
  )
}