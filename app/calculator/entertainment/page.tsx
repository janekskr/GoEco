'use client'

import Link from 'next/link';
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
    <>Telefony, Komputery itd...
      <p>Input Value: {inputValue}</p>
      <div className='form-container flex w-[60vw] h-[70vh] bg-[#9dedbe] absolute top-[60%] left-[50%] rounded-[35px] shadow-2xl overflow-hidden translate-x-[-50%] translate-y-[-50%]'>
        <ul className='bg-green-200 flex flex-col p-[35px] gap-4'>
          <li>
            <Link href="/calculator/home" className='text-[#36b796] block hover:opacity-[.5] transition'>Dom</Link>
          </li>
          <li>
            <Link href="/calculator/transport" className='text-[#36b796] block hover:opacity-[.5] transition'>Transport</Link>
          </li>
          <li>
            <Link href="/calculator/entertainment" className='text-[#36b796] block hover:opacity-[.5] transition'>Telefony, Komputery itd...</Link>
          </li>
        </ul>
        <form className="p-[35px] flex items-center flex-col flex-1">
          <p>Ile godzin twój telewizor jest używany ? ( podaj godziny )</p>
          <input type="range" min={min} max={max} value={inputValue} onChange={handleChange}></input>

          <p>{ecoTest(+inputValue)}</p>
        </form>
      </div>
    </>
  )
}

export default Calculator