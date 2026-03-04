import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button, Card, CardActionArea, CardMedia, Grid,
    Modal, Paper,
    Typography
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '95%',
    height: '95%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
};

export default function ProductsModal({ isModalOpen, onModalClose }) {
    return (
        <Modal
            open={isModalOpen}
            onClose={onModalClose}
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{mb: 2}}>
                    Agregar Nuevo Producto
                </Typography>
                <Button variant="contained" color="primary" onClick={onModalClose}>
                    cerrar modal
                </Button>
                <Paper sx={{height:'50%'}}>
                    <List sx={{ mt: 2 }} >
                        <ListItem >
                            <Accordion sx={{ mt: 2 , width:'100%' }}>
                                <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
                                    <Typography> Bebidas </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid container spacing={2} size={3}>
                                        {itemData.map((item, index) => (
                                            <Grid item key={index}>
                                                <Card sx={{maxWidth:'20%'}}>
                                                    <CardActionArea>
                                                        <CardMedia
                                                            component="img"
                                                            image={item.img}

                                                        ></CardMedia>
                                                    </CardActionArea>
                                                </Card>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                        </ListItem>
                    </List>
                </Paper>

            </Box>
        </Modal>
    )
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
        author: '@bkristastucchio',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
        author: '@rollelflex_graphy726',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
        author: '@helloimnik',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
        author: '@nolanissac',
    }]

