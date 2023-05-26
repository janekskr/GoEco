'use client'

import { ChangeEvent, useState } from 'react';

const Calculator = () => {
  const [inputValue, setInputValue] = useState('0')
  const min = 0
  const max = 100

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value
    setInputValue(inputValue);
  };

  const ecoTest = (value: number) => {
    if (value >= 50) {
      return "Nie jesteś Eko"
    }
    return "jesteś eko"
  }

  return (
    <>
      <h1 className="text-3xl font-bold self-center pb-[10px] border-b-[#29836d] border-b-[2px] w-full">Dom</h1>
      <p>Input Value: {inputValue}</p>
      <p>Ile godzin twój telewizor jest używany ? ( podaj godziny )</p>
      <input type="range" min={min} max={max} value={inputValue} onChange={handleChange}></input>
      <p>{ecoTest(+inputValue)}</p> 
    </>
  )
}

export default Calculator