import api from "./api";

export const fetchCategorias = (params = {}) => api.get("/categorias/", { params });
export const crearCategoria = (data) => api.post("/categorias/", data);
export const actualizarCategoria = (id, data) => api.put(`/categorias/${id}/`, data);
export const eliminarCategoria = (id) => api.delete(`/categorias/${id}/`);
