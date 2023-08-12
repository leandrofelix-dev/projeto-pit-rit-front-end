import React from 'react';
import * as Label from '@radix-ui/react-label';

interface ITextInputProps {
  label: string
  placeholder: string
  id: string
  type: string
  size: string
}

export const TextInput = ({label, placeholder, type, id, size} : ITextInputProps) => (
  <div className="flex flex-col px-4">
    <Label.Root className={`text-zinc-600 mb-2 w-${size}`}
        htmlFor={id}>
        {label}
    </Label.Root>
    <input
      className="bg-white shadow-zinc-200 inline-flex px-3 py-2.5 rounded-sm text-zinc-600 shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px] focus:shadow-zinc-500"
      type={type}
      id={id}
      placeholder={placeholder}
    />
  </div>
);