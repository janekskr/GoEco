import React from 'react'

const TitleComponent = ({children}: {children: string}) => {
  return (
    <h1 className='text-2xl sm:text-3xl font-bold text-center'>{children}</h1>
  )
}

export default TitleComponent