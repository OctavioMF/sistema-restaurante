import {Grid} from "@mui/material";
import TableCard from "./TableCard";


export default function TablesPage() {
    const table = {
        table_number: 2,
        capacity: 3,
    }

    return (
        <Grid container spacing={2} flexGrow={1} alignContent="flex-start" >
            <Grid item>
                <TableCard table={table} />
            </Grid>
            <Grid item >
                <TableCard table={table} />
            </Grid>
            <Grid item>
                <TableCard table={table} />
            </Grid>
            <Grid item>
                <TableCard table={table} />
            </Grid>
            <Grid item>
                <TableCard table={table} />
            </Grid>
            <Grid item>
                <TableCard table={table} />
            </Grid>
            <Grid item>
                <TableCard table={table} />
            </Grid>
            <Grid item>
                <TableCard table={table} />
            </Grid>
            <Grid item>
                <TableCard table={table} />
            </Grid>
            <Grid item>
            <TableCard table={table} />
            </Grid>


        </Grid>
    )
}