import {Drawer, Box, Typography} from "@mui/material"

export default function TableDrawer({table, isOpen, onCloseDrawer}){
    return (
        <Drawer anchor="right" open={isOpen} onClose={onCloseDrawer}>
            <Box sx={{ width: 300, p: 3 }}>
                <Typography variant="h4">
                    Mesa N° {table?.table_number}
                </Typography>
                    
                <Typography variant="body1">
                    Capacidad: {table?.capacity} personas
                </Typography>
                </Box>
        </Drawer>
    )
}