import {useState} from 'react';
const Calculator = () => {
  const [inputValue, setInputValue] = useState()
  const min = 0
  const max = 100

  const  handleChange = (event) => {
		let inputValue = event.target.value
    setInputValue(inputValue);

	};
  let ecoTest = (value) =>{
    if(value >= 50){
      return "Nie jesteś Eko"
    }
    else{
      return "jesteś eko"
    }
  }

  return (
    <>Calculator
      <p>Input Value: {inputValue}</p>
      <form>
        <p>Ile godzin twój telewizor jest używany ?( podaj godziny)</p>
        <input type="range" min={min} max={max} value={inputValue} onChange={handleChange}></input>

        <p>{ecoTest(inputValue)}</p>
      </form>

    </>
  )
}

export default Calculator