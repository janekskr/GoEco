import React from 'react'
import Link from 'next/link'
const Sidebar = () => {
  return (
    <ul className='bg-green-200 flex flex-col p-[35px] gap-4'>
          <li>
            <Link href="/calculator/" className='text-[#36b796] block hover:opacity-[.5] transition'>Dom</Link>
          </li>
          <li>
            <Link href="/calculator/transport" className='text-[#36b796] block hover:opacity-[.5] transition'>Transport</Link>
          </li>
          <li>
            <Link href="/calculator/entertainment" className='text-[#36b796] block hover:opacity-[.5] transition'>Telefony, Komputery itd...</Link>
          </li>
    </ul>
  )
}

export default Sidebar