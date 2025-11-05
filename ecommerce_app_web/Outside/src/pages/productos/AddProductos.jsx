import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'

export default function AddProductos() {
  const navigate = useNavigate();
  const [imagen, setImagen] = useState(null);
  const [categorias, setCategorias] = useState([]);
  const [vistaPrevia, setVistaPrevia] = useState(null);

  const [formData, setFormData] = useState({
    category: "",
    product_name: "",
    price: "",
    description: "",
    stock: "",
  });

  // console.log("result:", categorias)

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/categorias/')
      .then(res => res.json())
      .then(data => {
        console.log("data:", data)
        setCategorias(data.results || data || []);
        
      })
      .catch(err => console.error("Error al cargar categorías:", err));
  }, []);

  // Manejar inputs de texto
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
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
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("category", formData.category);
    data.append("product_name", formData.product_name);
    data.append("price", formData.price);
    data.append("description", formData.description);
    data.append("stock", formData.stock);

    if (imagen) {
      data.append("image", imagen);
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/api/productos/", {
        method: 'POST',
        body: data,

      });
      // console.log("result:", response)
      const result = await response.json();
      console.log("response:", response.status, result);

      if (response.ok) {
        toast.success("Producto agregado correctamente");
        setTimeout(() => navigate(-1), 1500);
      }
      else {
        toast.error("Error al guardar producto: " + JSON.stringify(result))
      }

    }
    catch (error) {
      console.error(error);
      toast.error("Error al conectar con el servidor");
    }

  };

  return (

    <div className="bg-white p-6 rounded-2xl max-w-3xl mx-auto mt-4">
      <ToastContainer position="top-center" autoClose={2000}/>
      <h2 className="text-2xl font-semibold text-gray-800 mt-2 mb-6">
        Agregar nuevo usuario
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Imagen */}
        <div className="flex flex-col items-center">
          <label className="text-gray-700 font-medium mb-2">
            Imagen del Producto
          </label>
          {vistaPrevia ? (
            <img
              src={vistaPrevia}
              alt="Vista previa"
              className="w-28 h-28 object-cover shadow mb-3"
            />
          ) : (
            <div className="w-28 h-28 flex items-center justify-center border-2 border-dashed border-gray-300 text-gray-400 mb-3">
              Sin imagen
            </div>
          )}
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImagen}
            className="block text-sm text-gray-600"
          />
        </div>

        {/* Campos principales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Categoria</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2.5
               focus:ring-2 focus:ring-blue-500 outline-none"
              required 
            >
              <option value="">Seleccionar categoria</option>
              {categorias.map((cat, index) => (
                <option key={cat.id} value={cat.id}>{cat.category_name}</option>
              ))}
              
            </select>
          </div>
          
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Nombre del Producto
            </label>
            <input
              type="text"
              name="product_name"
              value={formData.product_name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">
              Precio
            </label>
            <input
              type="number"
              name="price"
              step=".01"
              value={formData.price}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">
              Stock
            </label>
            <input
              type="text"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">
              Descripción
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Botón de guardar */}
        <div className="text-right">
          <button
            onClick={() => navigate(-1)}
            className="bg-amber-400 text-white mr-4 px-6 py-2.5 rounded-lg hover:bg-amber-500 transition"
          >
            Volver
          </button>
          <button
            type="submit"
            className="bg-teal-600 text-white px-6 py-2.5 rounded-lg hover:bg-teal-700 transition"
          >
            Guardar usuario
          </button>
        </div>
      </form>
    </div>


  );
}