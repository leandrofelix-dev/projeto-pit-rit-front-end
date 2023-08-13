import { data } from '@/data/rit-data'
import * as Label from '@radix-ui/react-label'
import { useState } from 'react'


interface ITextInputProps {
  label: string
  placeholder: string
  id: string
  type: string
}

export const TextInput = ({label, placeholder, type, id} : ITextInputProps) => (
  <div className="flex flex-col px-4">
    <Label.Root className='text-zinc-500 mb-1'
        htmlFor={id}>
        {label}
    </Label.Root>
    <input
      className={'bg-white shadow-zinc-200 inline-flex px-3 py-2.5 rounded-sm text-zinc-600 shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-zinc-500 h-10'}
      type={type}
      id={id}
      placeholder={placeholder}
      onChange={(e) => {
        const itemToVerify = data.find((item: any) => item.id === e.target.id);
        if (itemToVerify) {
          itemToVerify.value = e.target.value;
          console.log(data)
        } else {
          data.push({id: e.target.id, value: e.target.value})
          console.log(data)
        }
      }}
    />
  </div>
);