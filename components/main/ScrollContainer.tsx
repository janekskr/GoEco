const ScrollContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`overflow-y-scroll h-[55.5vh] w-full pr-[15px] pl-[15px] sm:pl-0 scrollbar-thin flex flex-col gap-[25px]`}>
        { children }
    </div>
  )
}

export default ScrollContainer