import TablesGrid from "./Components/TablesGrid";
import {Box} from "@mui/material";

export default function TablesPage() {
    return (
        <Box sx={{ height: "100%", width: "100%", pl:2, boxSizing: "border-box" }}>
            <h1>Mapa de mesas</h1>
            <TablesGrid/>
        </Box>

    )
}