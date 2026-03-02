import TablesGrid from "./Components/TablesGrid";
import {Box} from "@mui/material";

export default function TablesPage() {
    return (
        <Box sx={{ height: "100%", width: "100%", p:2, boxSizing: "border-box" }}>
            <TablesGrid/>
        </Box>

    )
}