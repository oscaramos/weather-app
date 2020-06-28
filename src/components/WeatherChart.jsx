import React from 'react';
import { ResponsiveLine } from '@nivo/line'


const WeatherChart = ({ data }) => (
    <ResponsiveLine
        data={data}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        enableGridX={false}
        enableGridY={false}
        colors="white"
        pointSize={5}
        pointColor="white"
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        enablePointLabel={true}
        pointLabel={(e) => e.y+'°'}
        pointLabelYOffset={-12}
        enableCrosshair={false}
        useMesh={true}
        isInteractive={false}
        legends={[]}
        theme={{
            dots: {
                text: {
                    fill: '#FFFFFF',
                },
            },
        }}
    />
)

export default WeatherChart;
