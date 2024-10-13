import React from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useTheme } from "@emotion/react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Avatar, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { lightBlue } from "@mui/material/colors";
import { useLocation, useNavigate } from "react-router-dom";
const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    variants: [
        {
            props: ({ open }) => open,
            style: {
                ...openedMixin(theme),
                "& .MuiDrawer-paper": openedMixin(theme),
            },
        },
        {
            props: ({ open }) => !open,
            style: {
                ...closedMixin(theme),
                "& .MuiDrawer-paper": closedMixin(theme),
            },
        },
    ],
}));
const Array1 = [
    { text: "Dashboard", icon: <HomeOutlinedIcon />, path: "/" },
    { text: "Manage Team", icon: <PeopleOutlinedIcon />, path: "/team" },
    {
        text: "Contacts Information",
        icon: <ContactsOutlinedIcon />,
        path: "/contacts",
    },
    {
        text: "Invoices Balances",
        icon: <ReceiptOutlinedIcon />,
        path: "/invoices",
    },
];
const Array2 = [
    { text: "Profile Form", icon: <PersonOutlinedIcon />, path: "/form" },
    { text: "Calendar", icon: <CalendarTodayOutlinedIcon />, path: "/calendar" },
    {
        text: "FAQ Page",
        icon: <HelpOutlineOutlinedIcon />,
        path: "/faq",
    },
];
const Array3 = [
    { text: "Bar Chart", icon: <BarChartOutlinedIcon />, path: "/bar" },
    { text: "Pie Chart", icon: <PieChartOutlineOutlinedIcon />, path: "/pie" },
    { text: "Line Chart", icon: <TimelineOutlinedIcon />, path: "/line" },
    { text: "Geography Chart", icon: <MapOutlinedIcon />, path: "/geography" },
];
export default function LeftBar({ open, handleDrawerClose }) {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const theme = useTheme();
    return (
        <>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "rtl" ? (
                            <ChevronRightIcon />
                        ) : (
                            <ChevronLeftIcon />
                        )}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <Avatar
                    sx={{
                        mx: "auto",
                        width: open ? 88 : 44,
                        height: open ? 88 : 44,
                        transition: ".25s",
                        my: 2,
                        border: "2px solid darkOrange",
                    }}
                    alt="tommy"
                    src="./WhatsApp Image 2024-09-21 at 09.50.07_8b6fe70d-modified.png"
                />
                <Typography
                    sx={{ fontSize: open ? 17 : 0, transition: ".25s" }}
                    align="center"
                >
                    tommy
                </Typography>
                <Typography
                    sx={{
                        fontSize: open ? 15 : 0,
                        transition: ".25s",
                        color: theme.palette.info.main,
                    }}
                    align="center"
                >
                    admin
                </Typography>
                <Divider />
                <List>
                    {Array1.map((item) => (
                        <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
                            {/* <Link to={item.path}> */}
                            <ListItemButton
                                onClick={() => {
                                    navigate(item.path);
                                }}
                                sx={[
                                    {
                                        minHeight: 48,
                                        px: 2.5,
                                        bgcolor:
                                            location.pathname === item.path
                                                ? theme.palette.mode ===
                                                    "dark"
                                                    ? grey[800]
                                                    : lightBlue[100]
                                                : null,
                                        justifyContent: open ? "initial" : "center",
                                    },
                                    open
                                        ? {
                                            justifyContent: "initial",
                                        }
                                        : {
                                            justifyContent: "center",
                                        },
                                ]}
                            >
                                <ListItemIcon
                                    sx={[
                                        {
                                            minWidth: 0,
                                            justifyContent: "center",
                                        },
                                        open
                                            ? {
                                                mr: 3,
                                            }
                                            : {
                                                mr: "auto",
                                            },
                                    ]}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.text}
                                    sx={[
                                        open
                                            ? {
                                                opacity: 1,
                                            }
                                            : {
                                                opacity: 0,
                                            },
                                    ]}
                                />
                            </ListItemButton>
                            {/* </Link> */}
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {Array2.map((item) => (
                        <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
                            <ListItemButton
                                onClick={() => {
                                    navigate(item.path);
                                }}
                                sx={[
                                    {
                                        minHeight: 48,
                                        px: 2.5,
                                        bgcolor:
                                            location.pathname === item.path
                                                ? theme.palette.mode ===
                                                    "dark"
                                                    ? grey[800]
                                                    : lightBlue[100]
                                                : null,
                                        justifyContent: open ? "initial" : "center",
                                    },
                                    open
                                        ? {
                                            justifyContent: "initial",
                                        }
                                        : {
                                            justifyContent: "center",
                                        },
                                ]}
                            >
                                <ListItemIcon
                                    sx={[
                                        {
                                            minWidth: 0,
                                            justifyContent: "center",
                                        },
                                        open
                                            ? {
                                                mr: 3,
                                            }
                                            : {
                                                mr: "auto",
                                            },
                                    ]}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.text}
                                    sx={[
                                        open
                                            ? {
                                                opacity: 1,
                                            }
                                            : {
                                                opacity: 0,
                                            },
                                    ]}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {Array3.map((item) => (
                        <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
                            <ListItemButton
                                onClick={() => {
                                    navigate(item.path);
                                }}
                                sx={[
                                    {
                                        minHeight: 48,
                                        px: 2.5,
                                        bgcolor:
                                            location.pathname === item.path
                                                ? theme.palette.mode ===
                                                    "dark"
                                                    ? grey[800]
                                                    : lightBlue[100]
                                                : null,
                                        justifyContent: open ? "initial" : "center",
                                    },
                                    open
                                        ? {
                                            justifyContent: "initial",
                                        }
                                        : {
                                            justifyContent: "center",
                                        },
                                ]}
                            >
                                <ListItemIcon
                                    sx={[
                                        {
                                            minWidth: 0,
                                            justifyContent: "center",
                                        },
                                        open
                                            ? {
                                                mr: 3,
                                            }
                                            : {
                                                mr: "auto",
                                            },
                                    ]}
                                >
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText
                                    primary={item.text}
                                    sx={[
                                        open
                                            ? {
                                                opacity: 1,
                                            }
                                            : {
                                                opacity: 0,
                                            },
                                    ]}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
            </Drawer>
        </>
    );
}
