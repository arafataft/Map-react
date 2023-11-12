import * as React from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Maps from '../components/Maps/Maps';
import Search from '../components/Search/Search';
import { DarkMode, WbSunny } from '@mui/icons-material';

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
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const mode = darkMode ? 'dark' : 'light';
  const [place, setPlace] = React.useState({});

  const getLocation = location => {
    setPlace(location);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton onClick={toggleDarkMode}>
            {darkMode ? <WbSunny/> : <DarkMode/>}
          </IconButton>
        </Toolbar>
        <Divider />
        <Search extractLocation={getLocation} darkMode={darkMode} />
      </Drawer>

      <Box
        component="main"
        sx={{
          backgroundColor: mode === 'light' ? 'white' : 'black',
          flexGrow: 1,
          height: '100vh',
          width: '100vw',
          overflow: 'auto',
        }}
      >
        <Container>
        <Maps place={place} />
        </Container>
      </Box>
    </Box>
  );
}
