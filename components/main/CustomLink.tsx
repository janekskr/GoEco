import Link from 'next/link'
import React from 'react'

interface CustomLinkProps {
    href: string;
    name: string;
    active: boolean;
}

const CustomLink = ({name, href, active}: CustomLinkProps) => {
  return (
    <Link href={href} className='text-[#36b796] block relative py-[5px] px-[10px] rounded-lg overflow-hidden duration-200 hover:bg-black/5'>
          <span className={ `z-10 relative ${active ? "transition-all duration-300 text-white" : ""}` }>{name}</span>
          <span className={ `absolute w-0 h-full left-0 top-0 bg-[#36b796] ${active ? "transition-all duration-300 w-full" : ""}` } />
    </Link>
  )
}

export default CustomLink