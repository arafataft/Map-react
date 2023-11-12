import * as React from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Maps from '../components/Maps/Maps';
import Search from '../components/Search/Search';
// import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
// import { Class, ClassOutlined, ClassSharp, ClassTwoTone, ManageAccountsTwoTone, Payment, Settings } from '@mui/icons-material';
// import {  Outlet } from 'react-router-dom';
// import useAdmin from '../../../hooks/useAdmin';
// import useStudent from '../../../hooks/useStudent';
// import useInstructor from '../../../hooks/useInstructor';
// import { motion } from "framer-motion"

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(5),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(5),
                },
            }),
        },
    }),
);

export default function Home() {
    const [open, setOpen] = React.useState(true);


    const toggleDrawer = () => {
        setOpen(!open);
    };

    // console.log('admin', isAdmin);
    // console.log('ins', isInstructor);
    // console.log('stu', isStudent);

    const [place, setPlace] = React.useState({});

  const getLocation = location => {
    setPlace(location);
  };
    return (
        <Box sx={{ display: 'flex'}}>
            <CssBaseline />

            <Drawer variant="permanent" open={open}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        px: [1],
                    }}
                >
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon />
                    </IconButton>
                </Toolbar>
                <Divider />
                <Search extractLocation={getLocation} />
                
            </Drawer>
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === 'light'
                            ? theme.palette.grey[100]
                            : theme.palette.grey[900],
                    flexGrow: 1,
                    height: '100vh',
                    width:'100vw',
                    overflow: 'auto',
                }}
            >
                <Container sx={{ }}>
                <Maps place={place} />
                </Container>
            </Box>
        </Box>
    );
}