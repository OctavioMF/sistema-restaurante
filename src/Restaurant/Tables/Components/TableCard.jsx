import {Card, CardActionArea, CardContent} from "@mui/material";
import Typography from "@mui/material/Typography";

export default function TableCard({ table }) {
    return (
        <Card>
            <CardActionArea>
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