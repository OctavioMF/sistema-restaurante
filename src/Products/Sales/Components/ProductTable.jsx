import {TableContainer, Table, TableBody, TableHead, TableCell, TableRow, Paper} from "@mui/material";

export default function ProductTable({products, onRowClick}) {

    return (<TableContainer component={Paper}>
        <Table stickyHeader size='small'>
            <TableHead>
                <TableRow>
                    <TableCell>Product Name</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Stock</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {products.map((product) => (
                    <TableRow
                        key={product.name}
                        sx={{
                            cursor:'pointer',
                            userSelect: 'none',
                            '&:last-child td, &:last-child th': {} }}
                        hover
                        onClick={() => {onRowClick(product.name)}}
                    >
                        <TableCell component="th" scope="row">
                            {product.name}
                        </TableCell>
                        <TableCell align="right">{product.price}</TableCell>
                        <TableCell align="right">{product.stock}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>);
}