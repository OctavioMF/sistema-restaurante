import ProductTable from "./Components/ProductTable";
import {useEffect, useState} from "react";
import CurrentSelectedProducts from "./Components/CurrentSelectedProducts";
import PaymentSection from "./Components/PaymentSection";
import {Box, Grid, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import ProductSearch from "../../Common/ProductSearch";

const { ipcRenderer } = window.require('electron');

export default function SalesPage() {
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [filter, setFilter]= useState("");

    useEffect(() => {
        loadProducts();
    }, []);

    const handleChange = (event) => {
        setFilter(event.target.value);
    }

    const loadProducts = async () => {
        const productsDb = await ipcRenderer.invoke('get-products');
        setProducts(productsDb);
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
            p: 2,
            boxSizing: 'border-box'
        }}>
            <Grid container spacing={2} sx={{ width: '100%'}}>

                <Grid item size={7} sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>

                    <ProductSearch filter={filter} handleChange={handleChange} />

                    <Paper sx={{
                        flex: 1,
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <ProductTable products={products} onRowClick={handleProductClick} filter={filter} />

                    </Paper>
                </Grid>

                <Grid item size={5} sx={{ height: '100%' }}>
                    <Paper sx={{
                        height: '100%',
                        p: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                            <Typography variant="body2" fontWeight="bold">TICKET DE VENTA</Typography>
                        </Box>
                        <Box sx={{
                            flex: 1,
                            minHeight: 0,
                            overflowY: 'auto',
                            mb: 0,
                            borderRadius: 1
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

