import {TextField} from "@mui/material";

export default function ProductSearch() {
    return (<TextField
        size='small'
        fullWidth
        placeholder="Buscar producto..."
        variant="outlined"
        sx={{
            input: {},
            '& .MuiOutlinedInput-notchedOutline': {}
        }}
    />)
}