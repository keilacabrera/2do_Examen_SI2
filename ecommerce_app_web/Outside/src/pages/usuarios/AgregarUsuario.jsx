import { useState } from "react";
import { motion } from "framer-motion";

export default function AgregarUsuario() {
  const [imagen, setImagen] = useState(null);
  const [vistaPrevia, setVistaPrevia] = useState(null);

  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    rol: "Cliente",
    estado: "activo",
  });

  // Manejar cambios de texto
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejar carga de imagen
  const handleImagen = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagen(file);
      setVistaPrevia(URL.createObjectURL(file));
    }
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí iría la lógica de envío al backend o Firebase
    const datos = new FormData();
    datos.append("nombre", formData.nombre);
    datos.append("telefono", formData.telefono);
    datos.append("email", formData.email);
    datos.append("rol", formData.rol);
    datos.append("estado", formData.estado);
    datos.append("imagen", imagen);

    console.log("Formulario enviado:", Object.fromEntries(datos.entries()));
    alert("Usuario agregado correctamente ✅");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 rounded-2xl max-w-3xl mx-auto mt-4"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mt-2 mb-6">
        Agregar nuevo usuario
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Imagen */}
        <div className="flex flex-col items-center">
          <label className="text-gray-700 font-medium mb-2">
            Foto de perfil
          </label>
          {vistaPrevia ? (
            <img
              src={vistaPrevia}
              alt="Vista previa"
              className="w-28 h-28 object-cover rounded-full shadow mb-3"
            />
          ) : (
            <div className="w-28 h-28 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-full text-gray-400 mb-3">
              Sin imagen
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImagen}
            className="block text-sm text-gray-600"
          />
        </div>

        {/* Campos principales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Teléfono
            </label>
            <input
              type="text"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Rol</label>
            <select
              name="rol"
              value={formData.rol}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option>Administrador</option>
              <option>Vendedor</option>
              <option>Cliente</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Estado
            </label>
            <select
              name="estado"
              value={formData.estado}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="activo">Activo</option>
              <option value="inactivo">Inactivo</option>
            </select>
          </div>
        </div>

        {/* Botón de guardar */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-teal-600 text-white px-6 py-2.5 rounded-lg hover:bg-teal-700 transition"
          >
            Guardar usuario
          </button>
        </div>
      </form>
    </motion.div>
  );
}
