import React from 'react';
import { ResponsiveLine } from 'nivo';
// import data from './dataOne.json';


const color_anomaly_data = (data) => {
    let anomalies = []
    let regulars = []
    data[0].data.forEach((point) => {
        if (point.is_anomaly > 0.5) {
            anomalies.push(point)
            regulars.push({ ...point, 'y': null })
        }
        else {
            anomalies.push({ ...point, 'y': null })
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

const Graph = ({ data }) => {
    return (
        <ResponsiveLine
            data={color_anomaly_data(data)}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            // xScale={{
            //     type: 'time',
            //     format: '%m',
            //     precision: 'day',
            // }}
            // xFormat="%m"
            yScale={{
                type: 'linear',
                stacked: false
            }}
            colors={['#00B4D8', 'red', '#00B4D8']}
            useMesh={true}
            // axisLeft={{
            //     legend: 'כמות'
            // }}
            // axisBottom={
            //     {
            //         legend: "זמן"
            //     }
            // }
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
            options={{
                onClick: function (e) { console.log(e) }
            }}
        />
    )
}

export default Graph;
