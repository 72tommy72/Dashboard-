import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import TopBar from './TopBar';
import LeftBar from './LeftBar';
import BarContent from './BarContent';
import { createTheme, ThemeProvider } from '@mui/material';
import { getDesignTokens } from '../../darkMode/theme';


export default function MiniDrawer() {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const [mode, setMode] = React.useState(localStorage.getItem("currentMode") ? localStorage.getItem("currentMode") : "light");
    const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
    return (
        <ThemeProvider theme={theme}>
            
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <TopBar open={open} handleDrawerOpen={handleDrawerOpen} setMode={setMode} />
                <LeftBar open={open} handleDrawerClose={handleDrawerClose} />
                <BarContent />
            </Box>
        </ThemeProvider>

    );
}
