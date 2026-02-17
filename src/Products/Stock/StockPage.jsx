import {Box, Grid, Paper, TextField} from "@mui/material";
import ExpandedProductTable from "./Components/ExpandedProductTable";
import CssBaseline from "@mui/material/CssBaseline";
import {useState} from "react";
import ProductSearch from "../../Common/ProductSearch";
import AddProductModal from "./Components/AddProductModal";


export default function StockPage() {
    const [filter, setFilter]= useState("");

    const handleChange = (event) => {
        setFilter(event.target.value);
    }

    return (
        <Box sx={{width:'100%', height:'100%'}}>
           <Paper sx={{display:'flex',justifyContent:'space-between' ,flexDirection: 'column', height: '100%', p:2}}>
               <Box sx={{pb:2}}>
                   <ProductSearch filter={filter} handleChange={handleChange}/>
                   <AddProductModal></AddProductModal>
               </Box>
               <Box sx={{flexGrow:1}}>
                   <ExpandedProductTable filter={filter}/>
               </Box>
           </Paper>
        </Box>
    )
}