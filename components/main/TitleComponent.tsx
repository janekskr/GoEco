import React from 'react'

const TitleComponent = ({children}: any) => {
  return (
    <h1 className='text-2xl sm:text-3xl font-bold'>{children}</h1>
  )
}

export default TitleComponent