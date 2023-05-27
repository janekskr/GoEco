import Link from 'next/link'
import React from 'react'

interface CustomLinkProps {
    href: string;
    name: string;
}

const CustomLink = ({name, href}: CustomLinkProps) => {
  return (
    <Link href={href} className='text-[#36b796] block transition relative group py-[5px] px-[10px] rounded-lg overflow-hidden'>
          <span className='group-hover:text-white z-10 relative duration-300'>{name}</span>
          <span className='absolute w-0 h-full left-0 top-0 bg-[#36b796] group-hover:w-full duration-300' />
    </Link>
  )
}

export default CustomLink