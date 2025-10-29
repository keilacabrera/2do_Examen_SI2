import { useEffect, useState } from "react";
import { LuPlus, LuSquarePen, LuTrash2, LuSave, LuX, LuSearch, LuChevronLeft, LuChevronRight } from "react-icons/lu";
import Pagination from "../../components/Pagination";
import VoiceSearch from "../../components/VoiceSearch";
import SearchBar from "../../components/SearchBar";
import CategoriaModal from "../../components/CategoriaModal";
import CategoriaHeader from "../../components/CategoriaHeader";
import ConfirmDialog from "../../components/ConfirmDialog";
import ConfirmDeleteModal from "../../components/ConfirmDeleteModal";

export default function CategoriaTable() {
  const [categorias, setCategorias] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [categoriaActual, setCategoriaActual] = useState(null);

  const pageSize = 5;
  const API_URL = "http://127.0.0.1:8000/api/categorias/";



  
  const fetchCategorias = async (query = "") => {
    setLoading(true);
    try {
      // console.log("Datos enviados:", formData);
      const res = await fetch(
        `${API_URL}?page=${page}&page_size=${pageSize}&search=${query}`
      );
      const data = await res.json();
      setCategorias(data.results || data);
      setTotalPages(Math.ceil(data.count / pageSize));
    } catch (error) {
      console.error("Error al obtener categorías:", error);
    } finally {
      setLoading(false);
    }
  };

    useEffect(() => {
    fetchCategorias(search);
  }, [page, search]);

  const handleOpenModal = (categoria = null) => {
    setCategoriaActual(categoria);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setCategoriaActual(null);
    setIsModalOpen(false);
  };

  const handleSave = async (formData) => {
    try {
      const method = categoriaActual ? "PUT" : "POST";
      const url = categoriaActual
        ? `${API_URL}${categoriaActual.id}/`
        : API_URL;
      console.log("Datos enviados:", formData);
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Error al guardar la categoría");

      await fetchCategorias();
      handleCloseModal();
    } catch (error) {
      console.error(error);
      alert("No se pudo guardar la categoría");
    }
  };

  // --- 🔻 NUEVA LÓGICA PARA ELIMINAR ---
  const handleOpenDeleteModal = (categoria) => {
    setCategoriaActual(categoria);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setCategoriaActual(null);
    setIsDeleteModalOpen(false);
  };

  const handleConfirmDelete = async () => {
    try {
      const response = await fetch(`${API_URL}${categoriaActual.id}/`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Error al eliminar categoría");

      await fetchCategorias();
      handleCloseDeleteModal();
    } catch (error) {
      console.error(error);
      alert("No se pudo eliminar la categoría");
    }
  };
  // ------------------------------------

  return (
    <div className="bg-white shadow-sm rounded-xl p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Categorías</h2>
        <div className="flex items-center gap-2">
          <SearchBar search={search} setSearch={setSearch} setPage={setPage} />
          <VoiceSearch onSearch={(text) => setSearch(text)} />
            
          
        </div>
        <button
            onClick={() => handleOpenModal()}
            className="bg-blue-600 text-white mr-6 px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            + Nueva
          </button>
        
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg  border-collapse">
          <thead className="bg-gray-100 text-left text-gray-700">
            <tr className="p-3  font-semibold ">
              <th className="p-3  font-semibold">ID</th>
              <th className="p-3   font-semibold">Nombre</th>
              <th className="p-3  font-semibold ">Fecha Creación</th>
              <th className="p-3  font-semibold ">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  Cargando...
                </td>
              </tr>
            ) : categorias.length > 0 ? (
              categorias.map((cat) => (
                <tr key={cat.id} className="hover:bg-blue-50 transition-colors border-t border-gray-200 ">
                  <td className="p-3 text-gray-700 ">{cat.id}</td>
                  <td className="p-3 text-gray-700 ">{cat.category_name}</td>
                  <td className="p-3 text-gray-700 ">{new Date(cat.created).toLocaleString()}</td>
                  <td className="p-3   text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button
                      onClick={() => handleOpenModal(cat)}
                      className="p-2 bg-yellow-100 text-yellow-600 rounded-md hover:bg-yellow-200"
                    >
                      <LuSquarePen size={16} />
                    </button>
                    <button
                      onClick={() => handleOpenDeleteModal(cat)}
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

      <Pagination page={page} setPage={setPage} totalPages={totalPages} />

      <CategoriaModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSave}
        categoriaActual={categoriaActual}
      />

      <ConfirmDeleteModal
        isOpen={isDeleteModalOpen}
        onClose={handleCloseDeleteModal}
        onConfirm={handleConfirmDelete}
        categoria={categoriaActual}
      />
    </div>
  );
}
