import ProductTable from "./components/ProductTable";
import {useState} from "react";
import CurrentSelectedProducts from "./components/CurrentSelectedProducts";
import PaymentSection from "./components/PaymentSection";
import {Box, Grid, Stack} from "@mui/material";


export default function StockPage() {
    const [selectedProducts, setSelectedProducts] = useState([]);

    const [products, setProducts] = useState([
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
        <Box sx={{ display:'flex', flex:1    , backgroundColor: '#fff' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} size={8}>
                    <ProductTable products={products} onRowClick={handleProductClick} />
                </Grid>
                <Stack spacing={2} size={2}>
                    <Grid item xs={12}>
                        <CurrentSelectedProducts products={selectedProducts} onRowClick={handleSelectedProductsClick} />
                    </Grid>
                    <Grid item xs={12}>
                        <PaymentSection></PaymentSection>
                    </Grid>
                </Stack>

            </Grid>
        </Box>
    )
}

