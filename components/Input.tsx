/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

interface InputProps {
  id: string;
  onchange: any;
  value: string;
  label: string;
  type?: string;
}
const Input: React.FC<InputProps> = ({ id, onchange, value, label, type }) => {
  return (
    <div className="relative">
      <input
        onChange={onchange}
        type={type}
        value={value}
        id={id}
        className="peer block w-full appearance-none rounded-md bg-neutral-700 px-6 pb-1 pt-6 text-sm text-white focus:outline-none focus:ring-0 "
        placeholder=" "
      />
      <label
        className="peer-placeholder-show:translate-y-0 absolute left-6 top-4 z-10 origin-[0] -translate-y-3
      scale-75 text-sm text-zinc-400 duration-150 peer-placeholder-shown:scale-100 
       peer-focus:-translate-y-3 peer-focus:scale-75"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
