'use client'

import {ChangeEvent, useState} from 'react';

const Calculator = () => {
  const [inputValue, setInputValue] = useState('0')
  const min = 0
  const max = 100

  const  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const inputValue = event.target.value
    setInputValue(inputValue);

	};

  const ecoTest = (value: number) =>{
    if (value >= 50) {
      return "Nie jesteś Eko"
    }
    return "jesteś eko"
  }

  return (
    <>Calculator
      <p>Input Value: {inputValue}</p>
      <form>
        <p>Ile godzin twój telewizor jest używany ? ( podaj godziny )</p>
        <input type="range" min={min} max={max} value={inputValue} onChange={handleChange}></input>

        <p>{ecoTest(+inputValue)}</p>
      </form>

    </>
  )
}

export default Calculator