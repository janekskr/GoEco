const ScrollContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="overflow-y-auto pb-[20px] h-full w-full pr-[15px] pl-[15px] sm:pl-0 flex flex-col gap-[25px]">
        { children }
    </div>
  )
}

export default ScrollContainer