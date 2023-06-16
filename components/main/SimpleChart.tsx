interface ChartProps {
    compared: number
    baseline: number
}

export default function SimpleChart({ compared, baseline }: ChartProps) {
    let first = compared / baseline * 100
    let second = 100

    if (first > second) {
        first = 100
        second *= baseline / compared
    }

    return (
        <div className="w-72 am:w-96">
            <div className="w-72 am:h-96 flex row justify-around items-end mx-auto  ">
                <div className="w-12 bg-white" style={{height: `${first}%`}}></div>
                <div className="w-12 bg-white" style={{height: `${second}%`}}></div>
            </div>
            <hr/>
            <p className="inline-block w-1/2 text-center">Ty</p><p className="inline-block w-1/2 text-center">Przeciętna osoba</p>
        </div>
    )
}