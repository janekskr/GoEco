'use client'

import { ChangeEvent, useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState({
    input1: '',
    input2: ''
  })
  let min : number = 0
  // JAK COŚ TO 1 litr benzyny = 2.5kg CO2 

  const liters = (consumption: number, km: number) => {
    return +(consumption * km / 100).toFixed(2)
  }

  const sum = (consumption: number, km: number) => {
    return +(liters(consumption, km) * 2.5).toFixed(2)
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
      const { name, value } = event.target 
      name && setInput((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <>
      <h1 className="text-3xl font-bold self-center pb-[10px] border-b-[#29836d] border-b-[2px] w-full">Transport</h1>
      <div>
        <label htmlFor='consumption'>Jakie jest twoje średnie spalanie na 100km ?</label>
        <input min={min}  value={input.input1} name="input1" type="number" className='text-[#36b796] ml-[10px] mr-[5px] p-[5px] outline-none rounded-sm' id='consumption' onChange={handleChange} /><span>Litrów</span>
      </div>
      <div>
        <label htmlFor='km'>Ile kilometrów przejechałeś ?</label>
        <input min={min} value={input.input2} name="input2" type="number" className='text-[#36b796] ml-[10px] mr-[5px] p-[5px] outline-none rounded-sm'  id='km' onChange={handleChange} /> <span> / 100km</span>
      </div>
      <p>Spaliłeś: {liters(+input.input1, +input.input2)} Litrów paliwa</p>
      <p>Wyprodukowałeś: {sum(+input.input1, +input.input2)} kilogramów CO2</p>
    </>
  )
}

export default Calculator