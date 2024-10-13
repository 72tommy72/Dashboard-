import React from 'react'
// import { ResponsiveBar } from '@nivo/bar'
import { Box } from '@mui/material';import Bar from './barChartCopy';

export default function BarChart() {
    return (
    <Box>
        <h1>Bar Chart</h1>
        <p>The minimum wage in Germany, France and Spain (EUR/month)</p>
        <Bar />
    </Box>
    );
};


