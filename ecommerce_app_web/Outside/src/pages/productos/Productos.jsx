import { useState } from "react";
import { motion } from "framer-motion";
import ProductoModal from "./ProductoModal";
import { LuPlus, LuSquarePen, LuTrash2 } from "react-icons/lu";

const productos = [
  {
    id: 1,
    nombre: "Lavadora MABE 9.5 Kg Carga Superior Plata",
    precio: "3,798.74",
    stock: 120,
    categoria: "Lavado y Secado",
    imagen: "https://www.camsa.com.bo/public/uploads/all/etkr21XmkJG3ZeAgz96XF4aLnEF7qigTEmlbOA56.jpg",
  },
  {
    id: 2,
    nombre: "Refrigerador MIDEA Top Freezer No Frost Light Silver 388 Lts",
    precio: "5,399.03",
    stock: 75,
    categoria: "Refrigeración",
    imagen: "https://www.camsa.com.bo/public/uploads/all/4mMYMQEvrsoPGJwJVjZSHlcT6of9VM5Y8bud0ZkZ.jpg",
  },
  {
    id: 3,
    nombre: "Horno Eléctrico OSTER Tssttvdfl1 22L 1400W Inox",
    precio: "1,399.00",
    stock: 200,
    categoria: "Cocina y Hogar",
    imagen: "https://www.camsa.com.bo/public/uploads/all/o5oEOSMpi8SvD2p649eKLwC7vX5oetUkrfY5T4xS.jpg",
  },
];

export default function Productos() {
    const [productos, setProductos] = useState([
    { id: 1, nombre: "Vaso 250ml", precio: "3.50", stock: 120, categoria: "Vasos", imagen: "https://via.placeholder.com/60" },
  ]);

  const [modalOpen, setModalOpen] = useState(false);

  const handleSave = (nuevoProducto) => {
    setProductos((prev) => [...prev, { id: Date.now(), ...nuevoProducto }]);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 shadow-md"
    >
      {/* Encabezado */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2 mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Gestión de Productos</h2>
        <button 
            onClick={() => setModalOpen(true)}
            className="mt-3 sm:mt-0 inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          <LuPlus size={18} /> Agregar producto
        </button>
      </div>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left text-gray-700">
              <th className="p-3">Imagen</th>
              <th className="p-3">Nombre</th>
              <th className="p-3">Precio (Bs)</th>
              <th className="p-3">Stock</th>
              <th className="p-3">Categoría</th>
              <th className="p-3 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((p) => (
              <motion.tr
                key={p.id}
                whileHover={{ scale: 1.01 }}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="p-3">
                  <img src={p.imagen} alt={p.nombre} className="w-12 h-12 rounded-md object-cover" />
                </td>
                <td className="p-3 font-medium text-gray-800">{p.nombre}</td>
                <td className="p-3 text-gray-700">{p.precio}</td>
                <td className="p-3 text-gray-700">{p.stock}</td>
                <td className="p-3 text-gray-700">{p.categoria}</td>
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

      {/* Modal para agregar producto */}
      <ProductoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
      />
      
    </motion.div>
  );
}
