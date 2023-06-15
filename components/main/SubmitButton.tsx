"use client"

import { useRouter } from 'next/navigation'
import { useContext } from 'react'
import { CalculatorContext } from '@/context/CalculatorContext'

const   SubmitButton = ({ className }: { className?: string }) => {
  const router = useRouter()
  const {all} = useContext(CalculatorContext)

  const href = "/calculator/summary"

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if(all === 0) alert("Przoszę wypełnić formularz")
    else router.push(href)  
  }

  return (
    <a href={href} onClick={handleClick} className={`${className} bg-[#36b796] block py-[5px] px-[10px] text-white rounded-lg`}>Prześlij</a>
  )
}

export default SubmitButton