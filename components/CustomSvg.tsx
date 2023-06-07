interface CustomSvgProps {
    StrokeWidth?: string;
    Top?: string;
    StrokeColor?: string;
}


const CustomSvg = ({StrokeColor, StrokeWidth, Top }: CustomSvgProps) => {
    const strokeColor = StrokeColor ? StrokeColor : "#02674e"
    const top = Top ? Top : "4px"
    const strokeWidth = StrokeWidth ? StrokeWidth : "30"
  return (
    <svg className={`w-full left-0 absolute stroke-[${strokeColor}] top-[${top}]`} width="244" height="40" viewBox="0 0 244 40" fill="none">
          <path opacity="0.5" d="M3 21C20.1231 17.8525 37.9303 16.8192 55.3857 16.0719C84.6481 14.819 114.132 14.5194 143.388 15.9599C169.598 17.2503 195.455 20.3554 221.642 17.7519C228.347 17.0853 237.394 16.9679 244 16.9679" strokeWidth={strokeWidth} strokeLinejoin="round" />
    </svg>
  )
}

export default CustomSvg