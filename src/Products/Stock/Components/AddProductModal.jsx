import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import AddProductForm from "./AddProductForm";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
};

export default function AddProductModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box>
            <Button
                variant="contained"
                startIcon={<AddCircleOutlineIcon />}
                onClick={handleOpen}
            >
                Nuevo Producto
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ mb: 2 }}>
                        Agregar Nuevo Producto
                    </Typography>
                    <AddProductForm onClose={handleClose} />
                </Box>
            </Modal>
        </Box>
    )
}