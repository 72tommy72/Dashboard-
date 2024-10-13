import { Box } from "@mui/material";
import React from "react";
import LineChart from "./LineChart";

export default function Line() {
    return (
        <>
            <h1>Line Chart</h1>
            <p>Simple Line Chart</p>
            <Box>
                <LineChart/>
            </Box>
        </>
    );
}
