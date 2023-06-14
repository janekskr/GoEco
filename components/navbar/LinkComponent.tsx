'use cliet'

import Link from "next/link";

interface LinkParams {
  name: string;
  to: string
}

const LinkComponent = ({to, name}: LinkParams) => {

  return (
    <Link href={to} className="block font-semibold text-xl relative group" >
        <p className="text-center">{name}</p>
        <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-white duration-300 sm:group-hover:w-full" />
    </Link>
  )
}

export default LinkComponent