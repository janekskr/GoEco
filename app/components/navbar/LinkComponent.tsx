'use cliet'

import Link from "next/link";

interface LinkParams {
  name: string;
  to: string
}

const LinkComponent = (params: LinkParams) => {

  return (
    <Link href={params.to} className="block font-semibold text-xl relative border-white hover:border-b-[3px]" >
        {params.name}
    </Link>
  )
}

export default LinkComponent