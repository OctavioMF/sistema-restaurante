import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import DrawerList from "./DrawerList";
import {Drawer, IconButton, useTheme} from "@mui/material";
import {ColorModeContext} from "./ThemeContext";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


const drawerWidth = 180;

export default function Layout({children}) {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

    return (
        <Box sx={{ display: 'flex', height:'100vh', bgcolor:'background.default', color:'text.primary' }}>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Box>
                    <IconButton onClick={colorMode.toggleColorMode} color="inherit">
                        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                </Box>
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