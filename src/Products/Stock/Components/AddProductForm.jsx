import { useForm } from "react-hook-form";
import {Box, Button, TextField, Stack, Select, MenuItem} from "@mui/material";
import {useEffect, useState} from "react";

export default function AddProductForm({ onClose }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        window.api.getAllCategories().then(response => {
            console.log(response);
            setCategories(response);
        }).catch(error => {
            console.log(error);
        })
    }, []);

    const onSubmit = async (data) => {
        await window.api.createProduct(data);
    };

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>

                <Stack direction="row" spacing={2}>
                    <TextField
                        label="Codigo de Barras"
                        fullWidth
                        {...register("barcode", { required: "El código es obligatorio" })}
                        error={!!errors.code}
                        helperText={errors.code?.message}
                    />

                    <Select
                        fullWidth
                        {...register("category_id", { required: "Requerido" })}
                        error={!!errors.category_id}
                        defaultValue={""}
                    >
                        {categories?.map((cat)=>(
                            <MenuItem key={cat.id} value={cat.id}>
                                {cat.name}
                            </MenuItem>
                        ))}
                    </Select>
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