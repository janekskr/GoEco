'use client'

import { useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('')
  // JAK COŚ TO NA 3.785411784 litra spalonego paliwa jest  8,887 gramów CO2
  const sum = (liters: number) => {
    return (9 / 4) * liters
  }
  return (
    <>
      <h1>Transport</h1>
      <p>Input Value: {input}</p>
      <p>Ile ile litrów paliwa spaliłeś ?</p>
      <input value={input} name="age" type="number" className='text-[#36b796]' onChange={e => setInput(e.target.value)} />
      <p>Spaliłeś: {input}</p>
      <p>Wyprodukowałeś: {sum(+input)}gramów CO2</p>
    </>
  )
}

export default Calculator