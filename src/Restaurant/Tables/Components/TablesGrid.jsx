import {Grid} from "@mui/material";
import TableCard from "./TableCard";
import { useState } from "react";
import TableDrawer from "./TableDrawer";


export default function TablesPage() {
    const [selectedTable, setSelectedTable] = useState(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleTableClick = (tableInfo) => {
        setSelectedTable(tableInfo)
        setIsDrawerOpen(true)
    }

    const handleCloseDrawer = ()=>{
        setIsDrawerOpen(false)
    }

    const table = {
        table_number: 2,
        status: 'ocupado',
    }

    const tables = Array(10).fill(table);

    return (
        <>
            <Grid container spacing={2} flexGrow={1} alignContent="flex-start" >
                {tables.map((table, index)=>(
                    <Grid item key={index}>
                        <TableCard table={table} tableClick={handleTableClick}/>
                    </Grid>
                ))}
            </Grid>

            <TableDrawer table={selectedTable} isDrawerOpen={isDrawerOpen} onCloseDrawer={handleCloseDrawer} />
        </>
    )
}