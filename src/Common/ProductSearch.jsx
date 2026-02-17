import {TextField} from "@mui/material";

export default function ProductSearch({filter, handleChange}) {
    return (<TextField
        value={filter}
        onChange={handleChange}
        size='small'
        label="Buscar producto"
        variant="outlined"
    />)
}
