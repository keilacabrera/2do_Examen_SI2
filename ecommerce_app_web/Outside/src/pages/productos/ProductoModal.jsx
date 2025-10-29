import { motion, AnimatePresence } from "framer-motion";
import { LuX } from "react-icons/lu";
import { useState } from "react";

export default function ProductoModal({ isOpen, onClose, onSave }) {
  const [formData, setFormData] = useState({
    nombre: "",
    precio: "",
    stock: "",
    categoria: "",
    imagen: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    if (!formData.nombre || !formData.precio || !formData.stock || !formData.categoria) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    onSave(formData);
    setFormData({ nombre: "", precio: "", stock: "", categoria: "", imagen: "" });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Fondo oscuro */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md relative">
              <button
                onClick={onClose}
                className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
              >
                <LuX size={22} />
              </button>

              <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Agregar Producto
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Nombre *</label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Precio (Bs) *</label>
                    <input
                      type="number"
                      name="precio"
                      step="0.01"
                      value={formData.precio}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Stock *</label>
                    <input
                      type="number"
                      name="stock"
                      value={formData.stock}
                      onChange={handleChange}
                      className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">Categoría *</label>
                  <input
                    type="text"
                    name="categoria"
                    value={formData.categoria}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">URL de imagen</label>
                  <input
                    type="text"
                    name="imagen"
                    value={formData.imagen}
                    onChange={handleChange}
                    placeholder="https://..."
                    className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="text-center pt-3">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Guardar producto
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
