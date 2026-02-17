import { useForm } from "react-hook-form";
import { Box, Button, TextField, Stack, Alert } from "@mui/material";
import { useState } from "react";
const { ipcRenderer } = window.require("electron"); // Importación correcta para tu config actual

export default function AddProductForm({ onClose }) { // Asumo que recibes un onClose para cerrar el modal
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [status, setStatus] = useState(null); // Para mostrar mensajes de éxito/error

    const onSubmit = async (data) => {
        setStatus(null);

        // Convertir tipos de datos para que coincidan con la DB
        const payload = {
            code: data.code,
            name: data.name,
            price: parseFloat(data.price),
            stock: parseInt(data.stock),
            lote: parseInt(data.lote)
        };

        const response = await ipcRenderer.invoke('create-product', payload);

        if (response.success) {
            setStatus({ type: 'success', msg: 'Producto guardado con éxito' });
            reset(); // Limpiar formulario
            if (onClose) setTimeout(onClose, 1500); // Cerrar modal opcionalmente
        } else {
            // Manejo básico de error de duplicados (UNIQUE constraint en 'name')
            if (response.error.includes('UNIQUE constraint failed')) {
                setStatus({ type: 'error', msg: 'Error: Ya existe un producto con ese nombre.' });
            } else {
                setStatus({ type: 'error', msg: 'Error al guardar en base de datos.' });
            }
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ p: 2 }}>
            <Stack spacing={2}>

                {status && <Alert severity={status.type}>{status.msg}</Alert>}

                <TextField
                    label="Código (Ej: ELEC-001)"
                    fullWidth
                    {...register("code", { required: "El código es obligatorio" })}
                    error={!!errors.code}
                    helperText={errors.code?.message}
                />

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
                            min: { value: 0, message: "Mínimo 0" }
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
                            min: { value: 0, message: "Mínimo 0" }
                        })}
                        error={!!errors.stock}
                        helperText={errors.stock?.message}
                    />
                </Stack>

                <TextField
                    label="Lote (Ej: 202401)"
                    type="number"
                    fullWidth
                    {...register("lote", { required: "El lote es obligatorio" })}
                    error={!!errors.lote}
                    helperText={errors.lote?.message}
                />

                <Button type="submit" variant="contained" color="primary" size="large">
                    Guardar Producto
                </Button>
            </Stack>
        </Box>
    );
}