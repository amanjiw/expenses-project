import React from 'react';
import ChartBar from './ChartBar';
import "./Chart.css"
const Chart = (props) => {

    const DataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const maxValue = Math.max(...DataPointValues);
    console.log(props.dataPoints)
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => {
                console.log(dataPoint)
                return <ChartBar key={Math.random()} label={dataPoint.label} maxValue={maxValue} value={dataPoint.value} />
            })}
        </div>
    );
}

export default Chart;