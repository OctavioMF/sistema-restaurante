import {Card, CardActionArea, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function TableCard({ table, tableClick}) {
    return (
        <Card>
            <CardActionArea onClick={()=>tableClick(table)}>
                <CardContent >
                    <Typography variant="h5" component="div">
                        {"Mesa N°"+table.table_number}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {table.capacity}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}