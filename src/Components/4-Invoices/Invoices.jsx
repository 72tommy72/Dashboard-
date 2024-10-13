import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { columns, rows } from "./dataInvoices";

const Invoices = () => {
    return <>
        <h1>INVOICES</h1>
            <p>List of Invoice Balances</p>
            <Box>
                <Box sx={{ height: 650, mx: "auto" }}>
                    <DataGrid
                        checkboxSelection
                        slots={{
                            toolbar: GridToolbar,
                        }}
                        rows={rows} columns={columns}
                    />
                </Box>
            </Box>
    </>
};

export default Invoices;