import { LuShoppingCart, LuSearch, LuUser } from "react-icons/lu";
import {Link} from 'react-router-dom'
import Search from "../../components/Search";

export default function HomeEcommerce() {
  const productos = [
    {
      id: 1,
      nombre: "Bolsa Biodegradable",
      precio: "Bs 12.00",
      imagen: "https://images.unsplash.com/photo-1580910051071-8dfc6b8d57d5",
    },
    {
      id: 2,
      nombre: "Vaso Compostable",
      precio: "Bs 8.00",
      imagen: "https://images.unsplash.com/photo-1615484478099-7774374d4f71",
    },
    {
      id: 3,
      nombre: "Bandeja Eco",
      precio: "Bs 15.00",
      imagen: "https://images.unsplash.com/photo-1616627986403-8d1e4b5b4b8d",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* HERO */}
      <header className="relative mt-8 bg-slate-900 text-white py-10">
        {/* <div className="ml-80 mx-80 mb-12 bg-white text-gray-600 rounded-lg">
          <input
            type="text"
            // value={search}
            // onChange={handleChange}
            placeholder="Buscar ..."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          
        </div> */}
        <Search/>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">

          <div className="md:w-1/2 space-y-4">
            <h1 className="text-4xl font-bold leading-tight">
              ElectroSTORE, tienda online de electrodomésticos al mejor precio.
            </h1>
            <p className="text-lg">
              Sembrando experiencias, formando clientes seguros.
            </p>
            <button className="bg-teal-600 text-gray-200 px-6 py-3 rounded-lg font-semibold hover:bg-gray-500 transition">
              Ver productos
            </button>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src="https://youtalkonline.com/wp-content/uploads/electrodom%C3%A9sticos-en-ingl%C3%A9s.jpg"
              alt="Productos electronicos"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </header>

      {/* PRODUCTOS DESTACADOS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-8">
          Productos destacados
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {productos.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={p.imagen}
                alt={p.nombre}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">{p.nombre}</h3>
                <p className="text-teal-600 font-medium mt-1">{p.precio}</p>
                <button className="mt-3 w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-gray-500 transition">
                  Agregar al carrito
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-teal-100 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold text-teal-700 mb-2">
              🌎 Respaldo y Garantía
            </h3>
            <p className="text-gray-600">
              Productos 100% garantizables.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-teal-700 mb-2">
              🚚 Envíos rápidos
            </h3>
            <p className="text-gray-600">
              Entregamos en todo el país en menos de 48 horas.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-teal-700 mb-2">
              💚 Programa de puntos
            </h3>
            <p className="text-gray-600">
              Regístrate y obtén descuentos exclusivos.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-gray-300 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between">
          <p>© 2025 ElectroSTORE. Todos los derechos reservados.</p>
          <div className="flex gap-4 mt-3 md:mt-0">
            <Link to="/" className="hover:text-white">Inicio</Link>
            <Link to="#" className="hover:text-white">Contacto</Link>
            <Link to="#" className="hover:text-white">Políticas</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
