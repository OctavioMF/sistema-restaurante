import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import {useEffect, useState} from "react";

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

export default function ExpandedProductTable({filter}) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const productsDb = await window.api.getProducts();
        setProducts(productsDb);
    };

    const filteredProducts = products.filter((products) => {
        if(!filter) return true;

        const lFilter = filter.toLowerCase();

        return (
            products.name.toLowerCase().includes(lFilter) ||
            products.code.toLowerCase().includes(lFilter)
        );

    })

    return (
        <Paper sx={{width: '100%', height: '100%' }}>
            <DataGrid
                rows={filteredProducts}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                sx={{ border: 0 }}
                disableRowSelectionOnClick
                density={"compact"}
                autoPageSize={true}
            />
        </Paper>
    );
}
