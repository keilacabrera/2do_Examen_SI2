import { useState, useEffect } from "react";

export default function CategoriaModal({ isOpen, onClose, onSave, categoriaActual }) {
  const [category_name, setNombre] = useState("");
  // const [descripcion, setDescripcion] = useState("");

  useEffect(() => {
    if (categoriaActual) {
      setNombre(categoriaActual.category_name);
      // setDescripcion(categoriaActual.descripcion || "");
    } else {
      setNombre("");
      // setDescripcion("");
    }
  }, [categoriaActual]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ category_name });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-xl shadow-lg w-11/12 max-w-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          {categoriaActual ? "Editar Categoría" : "Nueva Categoría"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Nombre
            </label>
            <input
              type="text"
              value={category_name}
              onChange={(e) => setNombre(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-end gap-3 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100 text-gray-700"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              {categoriaActual ? "Guardar Cambios" : "Crear"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

