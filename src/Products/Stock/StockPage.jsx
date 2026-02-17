import {Box, Grid, Paper, TextField} from "@mui/material";
import ExpandedProductTable from "./Components/ExpandedProductTable";


export default function StockPage() {
    return (
        <Box sx={{width:'100%', height:'100%'}}>
           <Paper sx={{justifyContent:'space-between' ,flexDirection: 'column', height: '100%', p:2}}>
               <Box sx={{pb:2}}>
                   <TextField id="outlined-basic" label="Outlined" variant="outlined" />
               </Box>
               <Box sx={{}}>
                   <ExpandedProductTable/>
               </Box>
           </Paper>
        </Box>
    )
}