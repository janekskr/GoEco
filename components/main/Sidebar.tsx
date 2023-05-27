import React from 'react'
import Link from 'next/link'
import CustomLink from './CustomLink'
const Sidebar = () => {
  return (
    <ul className='bg-green-200 flex flex-col p-[40px] gap-4'>
      <li>
        <CustomLink href="/calculator/" name="Kalkulator" />
      </li>
      <li>
        <CustomLink href="/calculator/transport" name="Transport" />
      </li>
      <li>
        <CustomLink href="/calculator/entertainment" name="Telefony, Komputery itd..." />
      </li>
    </ul>
  )
}

export default Sidebar