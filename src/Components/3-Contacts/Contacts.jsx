import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { columns, rows } from "./dataContact";
const Contacts = () => {
    return <>
    <h1>CONTACTS</h1>
        <p>List of Contacts for Future Reference</p>
        <Box>
            <Box sx={{ height: 650, width: "99%", mx: "auto" }}>
                <DataGrid
                    slots={{
                        toolbar: GridToolbar,
                    }}
                    rows={rows}
                    // @ts-ignore
                    columns={columns}
                />
            </Box>
        </Box>
        </>

};

export default Contacts;
