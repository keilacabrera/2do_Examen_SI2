import { motion } from "framer-motion";
import { NavLink, Link } from "react-router-dom";
import { LuPlus, LuSquarePen, LuTrash2 } from "react-icons/lu";

const usuarios = [
  {
    id: 1,
    nombre: "Keyla Cabrera",
    telefono: "76543210",
    email: "keyla@example.com",
    estado: true,
    rol: "Administrador",
  },
  {
    id: 2,
    nombre: "Carlos Rojas",
    telefono: "70123456",
    email: "carlosr@example.com",
    estado: false,
    rol: "Cliente",
  },
  {
    id: 3,
    nombre: "Ana López",
    telefono: "71234567",
    email: "ana.lopez@example.com",
    estado: true,
    rol: "Vendedor",
  },
];

export default function Usuarios() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 rounded-2xl shadow-md"
    >
      {/* Encabezado */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between  mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Gestión de Usuarios</h2>
        <Link to="/usuarios/add">
            <button         
            className="mt-3 sm:mt-0 inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-500 transition">
          <LuPlus size={18} /> Agregar usuario
        </button>
        </Link>
        
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-700">
              <th className="p-3">Nombre</th>
              <th className="p-3">Teléfono</th>
              <th className="p-3">Email</th>
              <th className="p-3">Estado</th>
              <th className="p-3">Rol</th>
              <th className="p-3 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((u) => (
              <motion.tr
                key={u.id}
                whileHover={{ scale: 1.01 }}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-3 font-medium text-gray-800">{u.nombre}</td>
                <td className="p-3 text-gray-700">{u.telefono}</td>
                <td className="p-3 text-gray-700">{u.email}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      u.estado
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {u.estado ? "Activo" : "Inactivo"}
                  </span>
                </td>
                <td className="p-3 text-gray-700">{u.rol}</td>
                <td className="p-3 text-center">
                  <div className="flex justify-center gap-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                      <LuSquarePen size={18} />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                      <LuTrash2 size={18} />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
