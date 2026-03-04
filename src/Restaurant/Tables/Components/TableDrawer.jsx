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
} from "@mui/material";

import {Lens} from '@mui/icons-material'

import {useState} from 'react'
import ProductsModal from "./ProductsModal";

export default function TableDrawer({table, isDrawerOpen, onCloseDrawer}){
    const [modalOpen, setModalOpen] = useState(false);

    const [orderItems, setOrderItems] = useState([
        { id: 1, name: "Milanesa con papas", quantity: 1, price: 5500 },
        { id: 2, name: "Coca Cola 1.5L", quantity: 2, price: 1800 }
    ]);

    const onCloseModal = () => {
        setModalOpen(false);
    }

    return (
        <Drawer anchor="right" open={isDrawerOpen} onClose={onCloseDrawer}>
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
                            onClick={() => {setModalOpen(true)}}
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
            <ProductsModal isModalOpen={modalOpen} onModalClose={onCloseModal} />
        </Drawer>
    )
}