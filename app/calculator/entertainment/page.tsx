'use client'

import { ChangeEvent, useState } from 'react';

const Calculator = () => {
  const [input, setInput] = useState({
    input1: '',
    input2: ''
  })
  let min : number = 0
  // Laptop pobiera 60W na 1 godzinę jeden 1kWh = 1000W * 1g (W * t) / 1000
  // 1kWh = 758g CO2 
  const energy = (time: number) => {
    return (60 * time) / 1000
  }

  const co2Emission = (consumption: number) => {
    return (756 * energy(consumption)).toFixed(2)
  }
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
      const { name, value } = event.target 
      if(name && value)setInput((prevState) => ({ ...prevState, [name]: value }));
  }

  return (
    <>
      <h1 className="text-3xl font-bold self-center pb-[10px] border-b-[#29836d] border-b-[2px] w-full">Transport</h1>
      <div>
        <label htmlFor='consumption'>Ile godziń używałeś laptopa ?</label>
        <input min={min} value={input.input1} name="input1" type="number" className='text-[#36b796] ml-[10px] mr-[5px] p-[5px] outline-none rounded-sm' id='consumption' onChange={handleChange} />
      </div>
      <p>Zużyłeś: {energy(+input.input1)} Kwh</p>
      <p>Wyprodukowałeś: {co2Emission(+input.input1)} gramów CO2</p>
    </>
  )
}

export default Calculator