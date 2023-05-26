'use client'

import { ChangeEvent, useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState({
    input1: '',
    input2: ''
  })

  // JAK COŚ TO NA 3.785411784 litra spalonego paliwa jest  8,887 gramów CO2

  const liters = (consumption: number, km: number) => {
    return (consumption * km) / 100
  }

  const sum = (consumption: number, km: number) => {
    return (9 / 4) * liters(consumption, km) / 1000
  }
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
      const { name, value } = event.target 
      if(name && value)setInput((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <>
      <h1 className="text-3xl font-bold self-center pb-[10px] border-b-[#29836d] border-b-[2px] w-full">Transport</h1>
      <div>
        <label htmlFor='consumption'>Jakie jest twoje średnie spalanie na 100km ?</label>
        <input value={input.input1} name="input1" type="number" className='text-[#36b796] ml-[10px] mr-[5px] p-[5px] outline-none rounded-sm' id='consumption' onChange={handleChange} /><span>Litrów</span>
      </div>
      <div>
        <label htmlFor='km'>Ile kilometrów przejechałeś ?</label>
        <input value={input.input2} name="input2" type="number" className='text-[#36b796] ml-[10px] mr-[5px] p-[5px] outline-none rounded-sm'  id='km' onChange={handleChange} /> <span> / 100km</span>
      </div>
      <p>Spaliłeś: {liters(+input.input1, +input.input2)} Litrów paliwa</p>
      <p>Wyprodukowałeś: {sum(+input.input1, +input.input2)} kilogramów CO2</p>
    </>
  )
}

export default Calculator