'use client';
import { useState } from "react";

interface ITouchableTable {
  id: string;
  options: string[];
}

export const TouchableTable = ({ id, options }: ITouchableTable) => {
  const activityParams = [
    { label: options[0], color: '#c48383', value: '0' },
    { label: options[1], color: '#c8935b', value: '1' },
    { label: options[2], color: '#c5a53c', value: '2' },
    { label: options[3], color: '#84a944', value: '3' },
    { label: options[4], color: '#53b08b', value: '4' },
    { label: options[5], color: '#61a5c4', value: '5' },
    { label: options[6], color: '#707aac', value: '6' },
    { label: options[7], color: '#877caf', value: '7' },
    { label: options[8], color: '#986ca0', value: '8' },
    { label: options[9], color: '#916368', value: '9' },
  ];

  const [color, setColor] = useState('');

  function handleOptionSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    const selectedValue = e.target.value;
    const selectedActivity = activityParams.find(param => param.value === selectedValue);

    if (selectedActivity) { setColor(selectedActivity.color); }
  }

  const backgroundColorStyle = {
    backgroundColor: color ? color : '#fdfdfd',
    color: color ? 'white' : '#52525b'
  };

  return (
    <select
      style={backgroundColorStyle}
      className={`border border-zinc-200 rounded-sm p-2 text-zinc-600 outline-none focus:shadow-[0_0_0_2px] focus:shadow-zinc-500`}
      onChange={handleOptionSelect}
    >
      <option value="">Clique aqui...</option>
      {options.map((option, index) => (
        <option key={index} id={`${id}-${index}`} value={index.toString()}> {option} </option>
      ))}
    </select>
  );
};
