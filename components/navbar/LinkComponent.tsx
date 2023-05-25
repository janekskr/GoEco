'use cliet'

import Link from "next/link";

interface LinkParams {
  name: string;
  to: string
}

const LinkComponent = ({to, name}: LinkParams) => {

  return (
    <Link href={to} className="block font-semibold text-xl relative border-b-[3px] border-transparent hover:border-white" >
        {name}
    </Link>
  )
}

export default LinkComponent