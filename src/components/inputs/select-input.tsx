import * as Label from '@radix-ui/react-label';

interface ISelectInputProps {
  label: string;
  options: String[]
}

export const SelectInput = ({label, options}: ISelectInputProps) => {
  return (
    <div className="flex flex-col px-4">
      <Label.Root className="text-zinc-600 mb-2" 
        htmlFor='selectOption'>
        {label}
      </Label.Root>
      <select id="selectOption" name="selectOption" className=" bg-white shadow-zinc-200 inline-flex px-3 py-2.5 rounded-sm text-zinc-400 shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-zinc-500 w-200">
        <option value="">Selecione...</option>
        <option value="A">Opção A</option>
        <option value="B">Opção B</option>
        <option value="C">Opção C</option>
      </select>
    </div>
  )
}