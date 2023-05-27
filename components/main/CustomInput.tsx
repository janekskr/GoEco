import React, { ChangeEvent } from 'react'

interface CustomInputProps {
    name: string;
    label: string;
    spanContent ?: string;  
    min ?: number;  
    max ?: number;
    type: string;
    setInput: any;
    value: string;
}

export default function CustomInput({name, label, spanContent, type, setInput, min, value, max} : CustomInputProps) {
  
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target 
    name && setInput((prevState: any) => ({ ...prevState, [name]: value }));
  }

  return (
    <div className='flex items-center'>
        <label htmlFor={name}>{label}</label>
        <input type={type} id={name} name={name} min={min} max={max} value={value} onChange={handleChange} className='text-[#36b796] ml-[10px] mr-[5px] p-[5px] outline-none rounded-sm'/>
        <span>{spanContent}</span>
    </div>
  )
}
