import { useForm } from "react-hook-form";
import { Box, Button, TextField, Stack, Grid } from "@mui/material";

const { ipcRenderer } = window.require('electron');

export default function AddProductForm({ onClose }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        ipcRenderer.invoke("create-product", data);
    };

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>

                <Stack direction="row" spacing={2}>
                    <TextField
                        label="Código (Ej: ELEC-001)"
                        fullWidth
                        {...register("code", { required: "El código es obligatorio" })}
                        error={!!errors.code}
                        helperText={errors.code?.message}
                    />
                    <TextField
                        label="Lote"
                        type="number"
                        fullWidth
                        {...register("lote", { required: "Requerido" })}
                        error={!!errors.lote}
                        helperText={errors.lote?.message}
                    />
                </Stack>

                <TextField
                    label="Nombre del Producto"
                    fullWidth
                    {...register("name", { required: "El nombre es obligatorio" })}
                    error={!!errors.name}
                    helperText={errors.name?.message}
                />

                <Stack direction="row" spacing={2}>
                    <TextField
                        label="Precio"
                        type="number"
                        fullWidth
                        {...register("price", {
                            required: "Requerido",
                            min: { value: 0, message: "No negativo" }
                        })}
                        error={!!errors.price}
                        helperText={errors.price?.message}
                    />
                    <TextField
                        label="Stock Inicial"
                        type="number"
                        fullWidth
                        {...register("stock", {
                            required: "Requerido",
                            min: { value: 0, message: "No negativo" }
                        })}
                        error={!!errors.stock}
                        helperText={errors.stock?.message}
                    />
                </Stack>

                <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{ mt: 2 }}>
                    <Button onClick={onClose} variant="outlined" color="secondary">
                        Cancelar
                    </Button>
                    <Button type="submit" variant="contained" color="primary">
                        Guardar
                    </Button>
                </Stack>
            </Stack>
        </Box>
    );
}