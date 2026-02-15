import ProductTable from "./components/ProductTable";
import {useEffect, useState} from "react";
import CurrentSelectedProducts from "./components/CurrentSelectedProducts";
import PaymentSection from "./components/PaymentSection";
import {Box, Grid, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import ProductSearch from "./components/ProductSearch";

const { ipcRenderer } = window.require('electron');

export default function StockPage() {
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        cargarProductos();
    }, []);

    const cargarProductos = async () => {
        const productosDb = await ipcRenderer.invoke('get-products');
        setProducts(productosDb);
    };

    const handleSelectedProductsClick = (productName) => {
        const selectedProduct = selectedProducts.map((product) => {
            if (product.name === productName) {
                return { ...product, quantity: product.quantity - 1 };
            }
            return product;
        });
        setSelectedProducts(selectedProduct);

        const newProducts = products.map((product) => {
            if (product.name === productName) {
                return { ...product, stock: product.stock + 1 };
            }
            return product;
        });
        setProducts(newProducts);

    }

    const handleProductClick = (productName) => {
        const currentProduct = products.find(p => p.name === productName);

        if (currentProduct.stock > 0) {
            const nuevoStock = currentProduct.stock - 1;

            const newProducts = products.map((product) => {
                if (product.name === productName) {
                    return { ...product, stock: nuevoStock };
                }
                return product;
            });
            setProducts(newProducts);

            ipcRenderer.invoke('update-stock', productName, nuevoStock);

            const productExists = selectedProducts.find(p => p.name === productName);
            if(productExists) {
                const updatedSelection = selectedProducts.map((product) => {
                    if (product.name === productName) {
                        return { ...product, quantity: product.quantity + 1 };
                    }
                    return product;
                });
                setSelectedProducts(updatedSelection);
            } else {
                const productToAdd = products.find(p => p.name === productName);
                const newSelectedProduct = {
                    name: productName,
                    price: productToAdd.price,
                    quantity: 1,
                };
                setSelectedProducts([...selectedProducts, newSelectedProduct]);
            }
        }
    };

    return (
        <Box sx={{
            display: 'flex',
            height: '100%',
            width: '100%',
            backgroundColor: '#1e1e1e',
            p: 2,
            boxSizing: 'border-box'
        }}>
            <Grid container spacing={2} sx={{ height: '100%' , width: '100%'}}>

                <Grid item size={7} sx={{ height: '90%', display: 'flex', flexDirection: 'column', gap: 2 }}>

                    <ProductSearch></ProductSearch>

                    <Paper sx={{
                        flex: 1,
                        backgroundColor: '#2d2d2d',
                        color: 'white',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>

                        <ProductTable products={products} onRowClick={handleProductClick} />

                    </Paper>
                </Grid>

                <Grid item size={5} sx={{ height: '90%' }}>
                    <Paper sx={{
                        height: '100%',
                        backgroundColor: '#2d2d2d',
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                            <Typography variant="body2" color="white" fontWeight="bold">TICKET DE VENTA</Typography>
                        </Box>
                        <Box sx={{
                            flex: 1,
                            minHeight: 0,
                            overflowY: 'auto',
                            mb: 0,
                            border: '1px solid #444', borderRadius: 1
                        }}>
                            <CurrentSelectedProducts products={selectedProducts} onRowClick={handleSelectedProductsClick} />
                        </Box>
                        <Box>
                            <PaymentSection products={selectedProducts} onRowClick={handleProductClick} />
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

