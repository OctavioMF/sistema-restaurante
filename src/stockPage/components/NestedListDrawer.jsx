import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InventoryIcon from '@mui/icons-material/Inventory'; // Icono para Productos
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder'; // Icono de ejemplo para sub-items
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'; // Icono para Ventas

export default function NestedListDrawer() {
    // Estado para controlar si la sección "Productos" está abierta o cerrada
    const [openProductos, setOpenProductos] = useState(false);

    // Función para manejar el clic y cambiar el estado
    const handleClickProductos = () => {
        setOpenProductos(!openProductos);
    };

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
        >
            {/* Elemento principal del menú que se desplegará */}
            <ListItemButton onClick={handleClickProductos}>
                <ListItemIcon>
                    <InventoryIcon />
                </ListItemIcon>
                <ListItemText primary="Productos" />
                {/* Icono de flecha que cambia según el estado */}
                {openProductos ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            {/* Contenedor colapsable para las sub-opciones */}
            <Collapse in={openProductos} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {/* Sub-opción 1: Ver todos los productos */}
                    <ListItemButton sx={{ pl: 4 }}> {/* pl: 4 añade sangría (padding-left) */}
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Ver todos los productos" />
                    </ListItemButton>

                    {/* Sub-opción 2: Ventas */}
                    <ListItemButton sx={{ pl: 4 }}>
                        <ListItemIcon>
                            <PointOfSaleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Ventas" />
                    </ListItemButton>
                </List>
            </Collapse>
        </List>
    );
}