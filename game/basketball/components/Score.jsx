import React from "react"

function Score({children, leader, size, status}) {
    const [point, setPoint] = React.useState(0)

    React.useEffect(() => {
        if (!status) { setPoint(0) }}
    , [status])

    function plusOne() { if (status) { setPoint(prev => prev += 1) }}
    function plusTwo() { if (status) { setPoint(prev => prev += 2) }}
    function plusThree() { if (status) { setPoint(prev => prev += 3) }}

    return (
        <div className={children}>
            <h3 className="title">{children}</h3>
            <div className={`point ${size}`}>{point}</div>
            <div className="point-btn">
                <button onClick={plusOne}>+1</button>
                <button onClick={plusTwo}>+2</button>
                <button onClick={plusThree}>+3</button>
            </div>
            {leader && <p className="leader">Leader: {leader}</p>}
        </div>
    )
}

export default Score;