import React from 'react';
import { ResponsiveLine } from 'nivo';
import data from "./data.json"


const color_anomaly_data = (data) => {
    const anomalies = []
    const regulars = []
    data[0].data.forEach((point) => {
        if (point.is_annomaly > 0.5) {
            anomalies.push(point)
            regulars.push({...point, 'y': null})
            }
        else {
            anomalies.push({...point, 'y': null})
            regulars.push(point)
        }
    })
    return [
        data[0],
        {
            "id": data[0].id + " anomalies",
            "data": anomalies
        },
        {
            "id": data[0].id + " regulars",
            "data": regulars
        }
    ]
}

const Graph = () => {
    return (
        <ResponsiveLine
            data={color_anomaly_data(data)}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{
                type: 'time',
                format: '%Y-%m-%d',
                precision: 'day',
            }}
            xFormat="time:%Y-%m-%d"
            yScale={{
                type: 'linear',
                stacked: false
            }}
            enableSlices={false}
            crosshairType="cross"
            colors={['lime', 'red', 'lime']}
            useMesh={true}
        />
    )
}

export default Graph;
