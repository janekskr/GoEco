interface Entry {
    name: string,
    value: number,
}

interface CircleChartProps {
    entries: Entry[]
}

export default function         CircleChart({ entries }: CircleChartProps) {
    const colors = ["#b91c1c", "#4d7c0f", "#0e7490", "#86198f"]

    const sum = entries.map((x) => x.value).reduce((a, b) => a + b)

    let last = 0
    const gradient = entries.map((entry, index) => {
        const x = (360 * entry.value) / sum
        return `${colors[index]} ${last}deg ${last += x}deg`
    }).join(', ')

    return (
        <div>
            <div className="h-64 w-64 sm:h-96 sm:w-96 rounded-full" style={{background: `conic-gradient(${gradient})`}}></div>
            <ul className="list-inside flex row justify-evenly pt-5">
                {
                    entries.map((entry, index) => 
                    <li 
                        key={index} 
                        style={{"--dot-color": colors[index]} as React.CSSProperties}  
                        className={`marker:text-[--dot-color] marker:content-['⬤'] list-item`}
                    >
                        {` ${(entry.value / sum * 100).toFixed(0)}% ${entry.name}`}
                    </li>)
                }
            </ul>
        </div>
    )
}