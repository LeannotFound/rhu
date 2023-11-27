import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Dashboard from '@mui/icons-material/Dashboard';
import PregnantWomanIcon from '@mui/icons-material/PregnantWoman';
import BarChartIcon from '@mui/icons-material/BarChart';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import SettingsIcon from '@mui/icons-material/Settings';
import Collapse from '@mui/material/Collapse';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import { Badge } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';


import Dashboard1 from './dashboard'
import Settings from './settings'
import Reports from './reports'
import Patient from './patient'
import Create from './create'
import Activitylog from './activitylog'
import Appointment from './Appointment';



const drawerWidth = 240;


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function PersistentDrawerLeft() {

  
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClick = () => {
    setOpen(!open);
  };

  const [isOpen, setIsOpen] = React.useState(false);

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };
  
  const navigate = useNavigate();
  

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} color='default'  style={{backgroundColor:'white'}}>
        <Toolbar>
         
            <MenuIcon   onClick={handleDrawerOpen}/>
            <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit" marginLeft="5%">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
        </Box>
        
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        <ListItem  disablePadding onClick={() => navigate("/dashboard")}>
              <ListItemButton>
                <ListItemIcon>
                
                <Dashboard/>
                </ListItemIcon>
                <ListItemText> Dashboard</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider />

            <ListItem  disablePadding>
              <ListItemButton onClick={handleIsOpen}>
                <ListItemIcon>
                <MiscellaneousServicesIcon/>
                </ListItemIcon>
                <ListItemText> Services</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider />

            <Collapse in={isOpen}>
      <List component="div" disablePadding  onClick={() => navigate("/Appointment")}>
          <ListItemButton sx={{ pl: 2 }}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Appointment" />
          </ListItemButton>
        </List>

        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2 }}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Pre-natal " />
          </ListItemButton>
        </List>

        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2 }}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Referral" />
          </ListItemButton>
        </List>

        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2 }}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary="Lying in" />
          </ListItemButton>
        </List>
      </Collapse>
      <Divider />

            <ListItem  disablePadding onClick={() => navigate("/patient")}>
              <ListItemButton>
                <ListItemIcon>
                
                <PregnantWomanIcon/>
                </ListItemIcon>
                <ListItemText> Patient</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider />

            <ListItem  disablePadding onClick={() => navigate("/create")}>
              <ListItemButton>
                <ListItemIcon>
                <Divider />
                
                <BorderColorIcon/>
                </ListItemIcon>
                <ListItemText> Create content</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider />

            <ListItem  disablePadding onClick={() => navigate("/reports")}>
              <ListItemButton>
                <ListItemIcon>
                
                <BarChartIcon/>
                </ListItemIcon>
                <ListItemText> Reports</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider />

            <ListItem  disablePadding onClick={() => navigate("/activitylog")}>
              <ListItemButton>
                <ListItemIcon>
                
                <ManageHistoryIcon/>
                </ListItemIcon>
                <ListItemText> Activity Log</ListItemText>
              </ListItemButton>
            </ListItem>
            <Divider />

            <ListItem  disablePadding onClick={() => navigate("/settings")}>
              <ListItemButton  >
                <ListItemIcon>
                
                <SettingsIcon/>
                </ListItemIcon>
                <ListItemText> Settings</ListItemText>
              </ListItemButton>
            </ListItem>
            
          </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
     
        <Routes>
        <Route exact path='/dashboard' element={<Dashboard1/>}></Route>
        <Route path='/settings' element={<Settings/>}></Route>
        <Route path='/reports' element={<Reports/>}></Route>
        <Route path='/patient' element={<Patient/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/activitylog' element={<Activitylog/>}></Route>
        <Route path='/Appointment' element={<Appointment/>}></Route>

      </Routes>

     
      </Main>
    </Box>
  );
}
export default PersistentDrawerLeft