'use client'

import Link from 'next/link';
import {ChangeEvent, useState} from 'react';
import { useId } from 'react';
const Calculator = () => {
  const [inputValue, setInputValue] = useState('0')
  const [input, setL] = useState()
  // JAK COŚ TO NA 3.785411784 litra spalonego paliwa jest  8,887 gramów CO2
  let sum = (liters: any) =>{
    return (9/4) * liters
  }
  return (
    <>Transport 
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
          <p>Ile ile litrów paliwa spaliłeś ?</p>
          {/* <input type="range" min={min} max={max} value={inputValue} onChange={handleChange}></input> */}
          <input value={input} name="age" type="number" className='text-[#36b796]' onChange={e => setL(e.target.value)}/>
          <p>Spaliłeś: {input}</p>
          <p>Wyprodukowałeś: {sum(input)}gramów CO2</p>
        </form>
      </div>
    </>
  )
}

export default Calculator