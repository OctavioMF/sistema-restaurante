import {Box, Button, FormControl, MenuItem, Select, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";


export default function PaymentSection({ products, onRowClick }) {

    const calculateTotal = products.reduce((total, item) => total + item.price*item.quantity, 0);


    return (<Stack spacing={2} sx={{ mt: 2 }}>

        {/* Método de Pago */}
        <Box>
            <Typography variant="caption">Método de Pago:</Typography>
            <FormControl fullWidth size="small" sx={{ mt: 1 }}>
                <Select
                    defaultValue="Efectivo"
                    sx={{
                        '.MuiSvgIcon-root': {}
                    }}
                >
                    <MenuItem value="Efectivo">Efectivo</MenuItem>
                    <MenuItem value="Tarjeta">Tarjeta</MenuItem>
                </Select>
            </FormControl>
        </Box>

        {/* Total Gigante */}
        <Typography variant="h4" align="center"  sx={{fontWeight: 'bold', letterSpacing: 1 }}>
            TOTAL: {calculateTotal.toFixed(2)}
        </Typography>

        {/* Botones de Acción */}
        <Button variant="contained" color="success" size="large" sx={{ py: 1.5, fontWeight: 'bold'}}>
            COBRAR (F5)
        </Button>

        <Button variant="contained" color="error" sx={{}}>
            Cancelar Venta
        </Button>
    </Stack>)
}