import { alpha, styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import { Box, InputBase, Stack, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';



const drawerWidth = 240;

//     transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//     }),
//     overflowX: 'hidden',
// });

// const closedMixin = (theme) => ({
//     transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//     }),
//     overflowX: 'hidden',
//     width: `calc(${theme.spacing(7)} + 1px)`,
//     [theme.breakpoints.up('sm')]: {
//         width: `calc(${theme.spacing(8)} + 1px)`,
//     },
// });

// const DrawerHeader = styled('div')(({ theme }) => ({
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-end',
//     padding: theme.spacing(0, 1),
//     // necessary for content to be below app bar
//     ...theme.mixins.toolbar,
// }));
// //     shouldForwardProp: (prop) => prop !== 'open',
// // })(({ theme }) => ({
// //     zIndex: theme.zIndex.drawer + 1,
// //     transition: theme.transitions.create(['width', 'margin'], {
// //         easing: theme.transitions.easing.sharp,
// //         duration: theme.transitions.duration.leavingScreen,
// //     }),
// //     variants: [
// //         {
// //             props: ({ open }) => open,
// //             style: {
// //                 marginLeft: drawerWidth,
// //                 width: `calc(100% - ${drawerWidth}px)`,
// //                 transition: theme.transitions.create(['width', 'margin'], {
// //                     easing: theme.transitions.easing.sharp,
// //                     duration: theme.transitions.duration.enteringScreen,
// //                 }),
// //             },
// //         },
// //     ],
// // }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//     ({ theme }) => ({
//         width: drawerWidth,
//         flexShrink: 0,
//         whiteSpace: 'nowrap',
//         boxSizing: 'border-box',
//         variants: [
//             {
//                 props: ({ open }) => open,
//                 style: {
//                     ...openedMixin(theme),
//                     '& .MuiDrawer-paper': openedMixin(theme),
//                 },
//             },
//             {
//                 props: ({ open }) => !open,
//                 style: {
//                     ...closedMixin(theme),
//                     '& .MuiDrawer-paper': closedMixin(theme),
//                 },
//             },
//         ],
//     }),
// );

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
        {
            props: ({ open }) => open,
            style: {
                marginLeft: drawerWidth,
                width: `calc(100% - ${drawerWidth}px)`,
                transition: theme.transitions.create(['width', 'margin'], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
        },
    ],
}));

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function TopBar({ open, handleDrawerOpen, setMode }) {
    const theme = useTheme()
    return <>
        <AppBar position="fixed" open={open}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={[
                        {
                            marginRight: 5,
                        },
                        open && { display: 'none' },
                    ]}
                >
                    <MenuIcon />
                </IconButton>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <Box flexGrow={1} />
                <Stack direction="row" spacing={1}>
                    {theme.palette.mode === "light" ?
                        <IconButton onClick={() => {
                            localStorage.setItem('currentMode', theme.palette.mode === "dark" ? "light" : "dark")
                            setMode((prevMode) =>
                                prevMode === 'light' ? 'dark' : 'light',
                            );
                        }
                        } color='inherit'>
                            <LightModeOutlinedIcon />
                        </IconButton> :
                        <IconButton onClick={() => {
                            localStorage.setItem('currentMode', theme.palette.mode === "dark" ? "light" : "dark")
                            setMode((prevMode) =>
                                prevMode === 'light' ? 'dark' : 'light',
                            );
                        }
                        } color='inherit'>
                            <DarkModeOutlinedIcon />
                        </IconButton>}


                    <IconButton color='inherit'>
                        <NotificationsNoneOutlinedIcon />
                    </IconButton>
                    <IconButton color='inherit'>
                        <SettingsOutlinedIcon />
                    </IconButton>
                    <IconButton color='inherit'>
                        <PersonOutlineOutlinedIcon />
                    </IconButton>
                </Stack>
                {/* <Typography variant="h6" noWrap component="div">
                    Mini variant drawer
                </Typography> */}
            </Toolbar>
        </AppBar>
    </>
}
