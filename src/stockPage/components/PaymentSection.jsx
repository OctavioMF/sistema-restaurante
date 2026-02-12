import {Box, Button, FormControl, MenuItem, Select, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";


export default function PaymentSection({ products, onRowClick }) {
    return (<Stack spacing={2} sx={{ mt: 2 }}>

        {/* Método de Pago */}
        <Box>
            <Typography variant="caption" color="gray">Método de Pago:</Typography>
            <FormControl fullWidth size="small" sx={{ mt: 1 }}>
                <Select
                    defaultValue="Efectivo"
                    sx={{
                        color: 'white',
                        backgroundColor: '#333',
                        '.MuiSvgIcon-root': { color: 'white' }
                    }}
                >
                    <MenuItem value="Efectivo">Efectivo</MenuItem>
                    <MenuItem value="Tarjeta">Tarjeta</MenuItem>
                </Select>
            </FormControl>
        </Box>

        {/* Total Gigante */}
        <Typography variant="h4" align="center" sx={{ color: '#4caf50', fontWeight: 'bold', letterSpacing: 1 }}>
            TOTAL: $0.00
        </Typography>

        {/* Botones de Acción */}
        <Button variant="contained" color="success" size="large" sx={{ py: 1.5, fontWeight: 'bold', backgroundColor: '#00a100' }}>
            COBRAR (F5)
        </Button>

        <Button variant="contained" color="error" sx={{ backgroundColor: '#d32f2f' }}>
            Cancelar Venta
        </Button>

        <Button variant="contained" sx={{ backgroundColor: '#b71c1c', mt: 1 }}>
            CERRAR CAJA
        </Button>

    </Stack>)
}