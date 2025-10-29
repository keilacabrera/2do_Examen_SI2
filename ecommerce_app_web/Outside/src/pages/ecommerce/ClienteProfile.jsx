import React, { useState } from "react";
import { motion } from "framer-motion";
import { LuCamera, LuSave, LuPencilLine } from "react-icons/lu";

const ClienteProfile = () => {
  const [user, setUser] = useState({
    nombre: "Keyla Cabrera",
    email: "keyla@example.com",
    telefono: "+591 76543210",
    direccion: "Av. América 245, Cochabamba",
    foto: "https://i.pravatar.cc/150?img=47",
  });

  const [editMode, setEditMode] = useState(false);
  const [newData, setNewData] = useState(user);
  const [imagePreview, setImagePreview] = useState(user.foto);

  // Manejar cambios de texto
  const handleChange = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  };

  // Manejar carga de imagen
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  // Guardar cambios
  const handleSave = () => {
    setUser({ ...newData, foto: imagePreview });
    setEditMode(false);
  };

  return (
    <motion.div
      className="min-h-screen bg-gray-100 flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-3xl"
        initial={{ y: 30 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-start sm:gap-8">
          {/* Imagen de perfil */}
          <div className="relative">
            <img
              src={imagePreview}
              alt="Foto de perfil"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-blue-500"
            />
            {editMode && (
              <label className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-2 cursor-pointer hover:bg-blue-700">
                <LuCamera size={18} />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
            )}
          </div>

          {/* Información del usuario */}
          <div className="mt-6 sm:mt-0 flex-1 w-full">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Perfil del Cliente
            </h2>

            <div className="space-y-4">
              <div>
                <label className="text-gray-600 text-sm font-medium">
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  value={newData.nombre}
                  onChange={handleChange}
                  disabled={!editMode}
                  className={`w-full p-3 border rounded-lg mt-1 ${
                    editMode
                      ? "border-blue-400 focus:ring-2 focus:ring-blue-300"
                      : "bg-gray-50 border-gray-200"
                  }`}
                />
              </div>

              <div>
                <label className="text-gray-600 text-sm font-medium">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  value={newData.email}
                  onChange={handleChange}
                  disabled={!editMode}
                  className={`w-full p-3 border rounded-lg mt-1 ${
                    editMode
                      ? "border-blue-400 focus:ring-2 focus:ring-blue-300"
                      : "bg-gray-50 border-gray-200"
                  }`}
                />
              </div>

              <div>
                <label className="text-gray-600 text-sm font-medium">
                  Teléfono
                </label>
                <input
                  type="text"
                  name="telefono"
                  value={newData.telefono}
                  onChange={handleChange}
                  disabled={!editMode}
                  className={`w-full p-3 border rounded-lg mt-1 ${
                    editMode
                      ? "border-blue-400 focus:ring-2 focus:ring-blue-300"
                      : "bg-gray-50 border-gray-200"
                  }`}
                />
              </div>

              <div>
                <label className="text-gray-600 text-sm font-medium">
                  Dirección
                </label>
                <input
                  type="text"
                  name="direccion"
                  value={newData.direccion}
                  onChange={handleChange}
                  disabled={!editMode}
                  className={`w-full p-3 border rounded-lg mt-1 ${
                    editMode
                      ? "border-blue-400 focus:ring-2 focus:ring-blue-300"
                      : "bg-gray-50 border-gray-200"
                  }`}
                />
              </div>
            </div>

            {/* Botones */}
            <div className="flex justify-end mt-6 gap-4">
              {!editMode ? (
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setEditMode(true)}
                  className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  <LuPencilLine size={18} />
                  Editar
                </motion.button>
              ) : (
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSave}
                  className="flex items-center gap-2 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  <LuSave size={18} />
                  Guardar
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ClienteProfile;
