import { useEffect, useState } from "react";
import ProductoModal from "./ProductoModal";
import { NavLink, Link } from "react-router-dom";
import Pagination from "../../components/Pagination";
import VoiceSearch from "../../components/VoiceSearch";
import SearchBar from "../../components/SearchBar";
import ConfirmDeleteModal from "../../components/ConfirmDeleteModal";
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
  const [productos, setProductos] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  // const [modalOpen, setModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [productoActual, setProductoActual] = useState(null);

  const pageSize = 5;
  const API_URL = "http://127.0.0.1:8000/api/productos/";

  const fetchProductos = async (query = "") => {
    setLoading(true);
    try {
      const res = await fetch(
        `${API_URL}?page=${page}&page_size=${pageSize}&search=${query}`
      );
      const data = await res.json();
      setProductos(data.results || data);
      setTotalPages(Math.ceil(data.count / pageSize));
      console.log("Datos enviados:", res);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductos(search);
  }, [page, search]);

  const handleOpenModal = (productos = null) => {
    setCategoriaActual(productos);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setProductoActual(null);
    setIsModalOpen(false);
  };

  const handleSave = async (formData) => {
    try {
      const method = productoActual ? "PUT" : "POST";
      const url = productoActual
        ? `${API_URL}${productoActual.id}/`
        : API_URL;
      console.log("Datos enviados:", formData);
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Error al guardar la categoría");

      await fetchProductos();
      handleCloseModal();
    } catch (error) {
      console.error(error);
      alert("No se pudo guardar el producto");
    }
  };

  // --- 🔻 NUEVA LÓGICA PARA ELIMINAR ---
  const handleOpenDeleteModal = (producto) => {
    setProductoActual(producto);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setProductoActual(null);
    setIsDeleteModalOpen(false);
  };

  const handleConfirmDelete = async () => {
    try {
      const response = await fetch(`${API_URL}${productoActual.id}/`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Error al eliminar producto");

      await fetchProductos();
      handleCloseDeleteModal();
    } catch (error) {
      console.error(error);
      alert("No se pudo eliminar el producto");
    }
  };

  // const handleSave = (nuevoProducto) => {
  //   setProductos((prev) => [...prev, { id: Date.now(), ...nuevoProducto }]);
  // };

  return (
    <div className="bg-white shadow-sm rounded-xl p-6">
      <div className=" bg-white rounded-2xl shadow-lg p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Productos</h2>
          <div className="flex items-center gap-2">
            <SearchBar search={search} setSearch={setSearch} setPage={setPage} />
            <VoiceSearch onSearch={(text) => setSearch(text)} />
          </div>
          <Link to='/productos/add'>
            <button
              className="bg-teal-600 text-white w-30 mr-6 px-4 py-2 rounded-lg hover:bg-teal-500 transition">
              + Nuevo
            </button>
          </Link>


        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full rounded-lg text-left border-collapse">
            <thead className="bg-gray-100 text-gray-700 uppercase">
              <tr className="">
                <th className="px-4 py-3">IMAGEN</th>
                <th className="px-4 py-3">NOMBRE</th>
                <th className="px-4 py-3 ">CATEGORIA</th>
                <th className="px-4 py-3 ">PRECIO</th>
                <th className="px-4 py-3 ">STOCK</th>
                <th className="px-4 py-3 ">ESTADO</th>
                <th className="px-4 py-3 text-center">ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-500">
                    Cargando...
                  </td>
                </tr>
              ) : productos.length > 0 ? (
                productos.map((prod) => (
                  <tr key={prod.id} className="hover:bg-blue-50 transition-colors border-b border-gray-200 ">
                    <td>
                      {prod.image ? (
                        <img
                          src={`http://127.0.0.1:8000${prod.image}`}
                          alt={prod.product_name}
                          className="w-16 h-16 object-cover mx-auto"
                        />
                      ) : (
                        "—"
                      )}
                    </td>
                    <td className="p-3 text-gray-700 ">{prod.product_name}</td>
                    <td className="p-3 text-gray-700 ">{prod.category}</td>
                    <td>Bs {prod.price}</td>
                    <td>{prod.stock}</td>
                    {/* <td>{prod.is_available ? "✅" : "❌"}</td> */}
                    <td className="px-4 py-3">
                      <span className={`px-3 py-1 text-xs rounded-full font-medium ${prod.is_available ? "bg-green-200 text-green-700" : "bg-red-100 text-red-700"}`}>
                        {prod.is_available ? "Disponible" : "No Disponible"}
                      </span>
                    </td>
                    <td className="p-3   text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleOpenModal(prod)}
                          className="p-2 bg-yellow-100 text-yellow-600 rounded-md hover:bg-yellow-200"
                        >
                          <LuSquarePen size={16} />
                        </button>
                        <button
                          onClick={() => handleOpenDeleteModal(prod)}
                          className="p-2 bg-red-100 text-red-600 rounded-md hover:bg-red-200"
                        >
                          <LuTrash2 size={16} />
                        </button>
                      </div>

                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-500 italic">
                    No se encontraron categorías.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>


      <Pagination page={page} setPage={setPage} totalPages={totalPages} />

      {/* <CategoriaModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSave}
        categoriaActual={categoriaActual}
      /> */}

      {/* <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleConfirmDelete}
        categoria={categoriaActual}
      /> */}
    </div>
  );
}
