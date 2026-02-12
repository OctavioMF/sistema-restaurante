import ProductTable from "./components/ProductTable";
import {useState} from "react";
import CurrentSelectedProducts from "./components/CurrentSelectedProducts";
import PaymentSection from "./components/PaymentSection";
import {Box, Grid, Paper} from "@mui/material";
import Typography from "@mui/material/Typography";
import ProductSearch from "./components/ProductSearch";

export default function StockPage() {
    const [selectedProducts, setSelectedProducts] = useState([]);

    const [products, setProducts] = useState([
        {name:'CocaCola', price:500, stock:100 },
        {name:'Leche', price:200, stock:50 },
        {name:'Queso cremoso', price:278, stock:20 },
        {name:'Taza', price:1000, stock:130 },
        {name:'Dulce de leche', price:10, stock:271 },
        {name:'CocaCola', price:500, stock:100 },
        {name:'Leche', price:200, stock:50 },
        {name:'Queso cremoso', price:278, stock:20 },
        {name:'Taza', price:1000, stock:130 },
        {name:'Dulce de leche', price:10, stock:271 },
        {name:'CocaCola', price:500, stock:100 },
        {name:'Leche', price:200, stock:50 },
        {name:'Queso cremoso', price:278, stock:20 },
        {name:'Taza', price:1000, stock:130 },
        {name:'Dulce de leche', price:10, stock:271 },
        {name:'CocaCola', price:500, stock:100 },
        {name:'Leche', price:200, stock:50 },
        {name:'Queso cremoso', price:278, stock:20 },
        {name:'Taza', price:1000, stock:130 },
        {name:'Dulce de leche', price:10, stock:271 },
    ]);

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
        const newProducts = products.map((product) => {
            if (product.name === productName) {
                return { ...product, stock: product.stock - 1 };
            }
            return product;
        });
        setProducts(newProducts);

        const productExists = selectedProducts.find(p => p.name === productName);

        if(productExists) {
            const updatedSelection = selectedProducts.map((product) => {
                if (product.name === productName) {
                    return { ...product, quantity: product.quantity + 1 };
                }
                return product;
            });
            setSelectedProducts(updatedSelection);
        }else {
            const productToAdd = products.find(p => p.name === productName);

            const newSelectedProduct = {
                name: productName,
                price: productToAdd.price,
                quantity: 1,
            };

            setSelectedProducts([...selectedProducts, newSelectedProduct]);
        }
    }

    return (
        <Box sx={{
            display: 'flex',
            height: '100vh',
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
                            <PaymentSection />
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

