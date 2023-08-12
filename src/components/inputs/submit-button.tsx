import { Newspaper } from '@phosphor-icons/react'

interface ISubmitButtonProps {
  value: string;
}

export const SubmitButton = ({value}: ISubmitButtonProps) => {
  return (
    <button className="bg-emerald-500 rounded-md py-3 px-6 text-white font-semibold hover:bg-emerald-600 flex items-center justify-between">
      {value}
      <Newspaper size={24} weight="fill" className="ml-2"/>
    </button>
  )
}