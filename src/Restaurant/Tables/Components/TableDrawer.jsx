import { 
    Drawer, 
    Box, 
    Typography, 
    List, 
    ListItem, 
    ListItemText, 
    ListItemButton, 
    Divider,
    Paper,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button
} from "@mui/material";

import {Lens} from '@mui/icons-material'

import {useEffect, useState} from 'react'

export default function TableDrawer({table, isOpen, onCloseDrawer}){
    const [orderItems, setOrderItems] = useState([
        { id: 1, name: "Milanesa con papas", quantity: 1, price: 5500 },
        { id: 2, name: "Coca Cola 1.5L", quantity: 2, price: 1800 }
    ]);


    return (
        <Drawer anchor="right" open={isOpen} onClose={onCloseDrawer}>
            <Box sx={{ width: 500, p:3}}>
                <Typography variant="h4">
                    Mesa N° {table?.table_number}
                </Typography>
                    
                <Typography variant="body1" alignItems={'center'}>
                    <Lens />
                    {table?.status}
                </Typography>

                <Divider sx={{ mb: 2 }} />
                <Typography variant="h6">Detalle del Pedido</Typography>


                <Paper>
                    <List sx={{p:3}}>
                        {orderItems.map((item) => (
                            <ListItem key={item.id} disablePadding>
                                <ListItemText
                                    primary={`${item.quantity}x ${item.name}`}
                                />
                            </ListItem>
                        ))}

                        <ListItemButton
                            sx={{
                                border: '1px dashed',
                                borderColor: 'primary.main',
                                borderRadius: 1,
                                justifyContent: 'center',
                                height:30
                            }}
                        >
                            <ListItemText
                                primary="+ Agregar producto"
                                sx={{ color: 'primary.main', textAlign: 'center' }}
                            />
                        </ListItemButton>
                    </List>

                </Paper>
            </Box>
        </Drawer>
    )
}