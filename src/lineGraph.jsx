import React from 'react';
import { ResponsiveLine } from 'nivo';

const data=[
    {
        id: 'fake corp. A',
        data: [
            { x: '2018-01-01', y: 7 },
            { x: '2018-01-02', y: 5 },
            { x: '2018-01-03', y: 11 },
            { x: '2018-01-04', y: 9 },
            { x: '2018-01-05', y: 12 },
            { x: '2018-01-06', y: 16 },
            { x: '2018-01-07', y: 13 },
            { x: '2018-01-08', y: 13 },
        ],
    },
   
]



const ShoverTooltip = (datapoint) => {
    console.log(datapoint)
    return <div>TEST</div>
}

const Graph = () => {
    console.log(data)
    return (
        <ResponsiveLine
            enableSlices={false}
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{
                type: 'time',
                format: '%Y-%m-%d',
                precision: 'day',
            }}
            xFormat="time:%Y-%m-%d"
            yScale={{
                type: 'linear',
            }}

            enablePointLabel={true}
            pointSize={16}
            pointBorderWidth={1}
            pointBorderColor={{
                from: 'color',
                modifiers: [['darker', 0.3]],
            }}
            useMesh={true}
            enableSlices={false}
        />
    )
}

export default Graph;
