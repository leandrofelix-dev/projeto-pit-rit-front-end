import React from 'react';
import * as Label from '@radix-ui/react-label';

interface ITextAreaInputProps {
  label: string
  id: string
}

export const TextAreaInput = ({label, id} : ITextAreaInputProps) => (
  <div className="flex flex-col px-4 -mt-6 mb-2">
    <Label.Root className='text-zinc-500 mb-1'
        htmlFor={id}>
        {label}
    </Label.Root>
    <textarea 
      name="" 
      id=""
      className='bg-white shadow-zinc-200 inline-flex px-3 py-2.5 rounded-sm text-zinc-600 shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-zinc-500 h-40 mb-8'></textarea>
  </div>
);