'use cliet'

import Link from "next/link";

interface LinkParams {
  name: string;
  to: string
}

const LinkComponent = (params: LinkParams) => {

  return (
    <Link href={params.to} className="block font-semibold text-xl relative border-b-[3px] border-transparent hover:border-white" >
        {params.name}
    </Link>
  )
}

export default LinkComponent