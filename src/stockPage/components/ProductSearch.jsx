import {TextField} from "@mui/material";

export default function ProductSearch() {
    return (<TextField
        size='small'
        fullWidth
        placeholder="Buscar producto..."
        variant="outlined"
        sx={{
            backgroundColor: '#2d2d2d',
            input: { color: 'white' },
            '& .MuiOutlinedInput-notchedOutline': { borderColor: '#444' }
        }}
    />)
}