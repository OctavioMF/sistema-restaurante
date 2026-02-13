import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DrawerList from "./DrawerList";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import {AppBar, Drawer} from "@mui/material";

const drawerWidth = 180;

export default function Layout({children}) {
    return (
        <Box sx={{ display: 'flex', height:'100vh', backgroundColor: '#1e1e1e' }}>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: '#1e1e1e',
                        color: 'white',
                        borderRight: '1px solid #333',
                        '& .MuiSvgIcon-root': {
                            color: 'white'
                        }
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar />
                <Divider />
                <DrawerList></DrawerList>
            </Drawer>
            <Box component="main" sx={{
                flexGrow: 1,
                height: '100%',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                p: 0}}>
                {children}
            </Box>
        </Box>
    );
}