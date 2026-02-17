import {Box, Button, Modal} from "@mui/material";
import React from "react";
import AddProductForm from "./AddProductForm";

export default function AddProductModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <AddProductForm></AddProductForm>
            </Modal>
        </Box>
    )
}