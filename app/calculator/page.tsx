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
      <div className='form-container'>
        <ul className='form-nav'>
          <li>
            <a href="/house_CO2_prod" className='form-menu-options'>Dom</a>
          </li>
          <li>
            <a href="/Transport_CO2_prod" className='form-menu-options'>Transport</a>
          </li>
          <li>
            <a href="/Entertaimen_CO2_prod" className='form-menu-options'>phones, computers, itp</a>
          </li> 
        </ul>
        <form>
          <p>Ile godzin twój telewizor jest używany ? ( podaj godziny )</p>
          <input type="range" min={min} max={max} value={inputValue} onChange={handleChange}></input>

          <p>{ecoTest(+inputValue)}</p>
        </form>
      </div>
    </>
  )
}

export default Calculator