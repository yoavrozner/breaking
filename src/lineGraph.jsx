import React from 'react';
import { ResponsiveLine } from 'nivo';
import data from './data.json';

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
            xScale={{ type: 'linear' }}
            yScale={{
                type: 'point',
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'תאריך',
                legendOffset: 36,
                legendPosition: 'center'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'כמות',
                legendOffset: -40,
                legendPosition: 'center'
            }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh={true}
            />
    )
}

export default Graph;
