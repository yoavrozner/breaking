import React from 'react';
import { ResponsiveLine } from 'nivo';
import data from "./data.json"


// const ShoverTooltip = (datapoint) => {
//     console.log(datapoint)
//     return <div>TEST</div>
// }

const split_anomaly_data = (data) => {
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

// const color_anomalies = (data) => {
//     return data[0].data.forEach((point) => {
//         if (point.is_annomaly > 0.5) {
//             point['color'] = 'red'
//         }
//         else {
//             point['color'] = 'green'
//         }
//     }
//     )
// }

const Graph = () => {
    return (
        <ResponsiveLine
            data={split_anomaly_data(data)}
            // data={color_anomalies}
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
            curve={'monotoneX'}
            colors={['red', 'green']}
            // colors={(point) => {
            //     console.log(point)
            //     // data.forEach(({}))
            //     let is_anomaly = point.is_annomaly > 0.5
            //     console.log(is_anomaly)
            //     return is_anomaly ? 'red' : 'green'
            // }
            // }
            // colorBy={'color'}
            pointSize={16}
            pointBorderWidth={1}
            useMesh={true}
        />
    )
}

export default Graph;
