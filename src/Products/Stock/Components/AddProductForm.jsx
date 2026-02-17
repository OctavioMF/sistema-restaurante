import { useForm } from "react-hook-form";
import { Box, Button, TextField, Stack } from "@mui/material";

export default function AddProductForm(props) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Datos validados:", data);
    };

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ p: 2 }}>
            <Stack spacing={2}>
                <TextField
                    label="Nombre"
                    {...register("name", { required: "El nombre es obligatorio" })}
                    error={!!errors.name} // Pone el borde rojo si hay error
                    helperText={errors.name?.message} // Muestra el mensaje de error
                />

                <TextField
                    label="Precio"
                    type="number"
                    {...register("price", { min: { value: 0, message: "No puede ser negativo" } })}
                    error={!!errors.price}
                    helperText={errors.price?.message}
                />

                <Button type="submit" variant="contained">Guardar</Button>
            </Stack>
        </Box>
    );
}