import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SearchResults() {
  const { query } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      setLoading(true);
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/productos/?search=${query}`);
        const data = await response.json();
        setProductos(data.results || []); // depende de tu paginación
      } catch (error) {
        console.error("Error al buscar productos:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProductos();
  }, [query]);

  if (loading) return <p className="text-center mt-8">Buscando productos...</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">
        Resultados para: <span className="text-blue-600">{query}</span>
      </h2>

      {productos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {productos.map((p) => (
            <div key={p.id} className="border rounded-lg p-4 hover:shadow-lg transition">
              <img
                src={p.image}
                alt={p.product_name}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-lg font-semibold mt-2">{p.product_name}</h3>
              <p className="text-gray-600">Bs {p.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center">No se encontraron productos.</p>
      )}
    </div>
  );
}
