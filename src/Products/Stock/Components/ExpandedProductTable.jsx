import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import {useEffect, useState} from "react";

const { ipcRenderer } = window.require('electron');

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'code', headerName: 'Codigo', width: 130 },
    { field: 'name', headerName: 'Nombre', width: 130 },
    {
        field: 'price',
        headerName: 'Precio',
        type: 'number',
        width: 90,
    },
    {
        field: 'stock',
        headerName: 'Stock',
        type: 'number',
        width: 90,
    },
    {
        field: 'lote',
        headerName: 'Lote',
        type: 'number',
        width: 90,
    },

];

const paginationModel = { page: 0, pageSize: 5 };

export default function ExpandedProductTable() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        cargarProductos();
    }, []);

    const cargarProductos = async () => {
        const productosDb = await ipcRenderer.invoke('get-products');
        setProducts(productosDb);
    };

    return (
        <Paper  sx={{width: '100%', height: '100%', backgroundColor: '#000' }}>
            <DataGrid
                rows={products}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{ border: 0 }}
            />
        </Paper>
    );
}
