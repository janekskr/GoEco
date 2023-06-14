const TitleComponent = ({children}: {children: string}) => {
  return (
    <p className='text-2xl xl:text-[35px] font-bold text-center'>{children}</p>
  )
}

export default TitleComponent