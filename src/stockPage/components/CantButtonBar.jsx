import {Stack, Button, TextField} from '@mui/material';

export default function CantButtonBar() {
    return <>
        <Stack direction='row' spacing={2}>
            <Button component='contained' onClick={e => e.preventDefault()}>-</Button>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Button component='contained' onClick={e => e.preventDefault()}>+</Button>
        </Stack>
    </>
}