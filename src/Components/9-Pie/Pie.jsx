import React from 'react'
import { Box } from '@mui/material';
// import PieChart from './PieChart';
import PieChart  from './PieChart';

export default function Pie() {
    
    return <>
        <h1>Pie Chart</h1>
        <p>Simple Pie Chart</p>
        <Box>
            <PieChart />
        </Box>
    </>;
}
