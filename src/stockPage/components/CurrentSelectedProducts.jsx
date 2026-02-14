import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";


export default function CurrentSelectedProducts({ products, onRowClick }) {

    return (<TableContainer component={Paper}>
        <Table stickyHeader size='small'>
            <TableHead>
                <TableRow>
                    <TableCell>Product Name</TableCell>
                    <TableCell align="right">Price</TableCell>
                    <TableCell align="right">Quantity</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {products.map((product) => (
                    product.quantity > 0 && <TableRow
                        key={product.name}
                        sx={{
                            cursor:'pointer',
                            userSelect: 'none',
                            '&:last-child td, &:last-child th': { border: 0 } }}
                        onClickCapture={() => {onRowClick(product.name)}}
                    >
                        <TableCell component="th" scope="row">
                            {product.name}
                        </TableCell>
                        <TableCell align="right">{product.price}</TableCell>
                        <TableCell align="right">{product.quantity}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>);
}