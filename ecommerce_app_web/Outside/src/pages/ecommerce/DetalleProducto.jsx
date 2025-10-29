import { useState } from "react";
import { LuShoppingCart } from "react-icons/lu";

export default function DetalleProducto() {
  const [cantidad, setCantidad] = useState(1);

  const producto = {
    id: 1,
    nombre: "Televisor Samsung 55'' UHD 4K",
    precio: "Bs 4.899,00",
    descripcion:
      "Disfruta de imágenes más nítidas y colores vibrantes con el televisor Samsung UHD 4K de 55 pulgadas. Cuenta con tecnología Crystal Display, HDR, conexión Wi-Fi y control por voz integrado.",
    imagen:
      "https://merkamax.com.bo/wp-content/uploads/2021/12/Smart-TV-Samsung-4K-Crystal-AU9000-Merkamax-img-2.jpg",
    categoria: "Televisores",
    garantia: "2 años de garantía oficial",
    disponibilidad: "En stock",
  };

  const productosRelacionados = [
    {
      id: 2,
      nombre: "Refrigerador LG Smart Inverter",
      precio: "Bs 6.299,00",
      imagen:
        "https://www.lg.com/content/dam/channel/wcms/bo/images/refrigeradores/GT29BPP/modelos/GT29BPP-A1.jpg",
    },
    {
      id: 3,
      nombre: "Lavadora Whirlpool 15Kg Automática",
      precio: "Bs 3.499,00",
      imagen:
        "https://whirlpool.com.bo/media/catalog/product/cache/a40d7429b694d9d8ad5500fb8a6a7587/w/t/wtw4816fw_01.jpg",
    },
  ];

  const incrementar = () => setCantidad((prev) => prev + 1);
  const decrementar = () => setCantidad((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* HEADER */}
      {/* <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700">ElectroShop</h1>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
            <LuShoppingCart size={20} /> Carrito
          </button>
        </div>
      </header> */}

      {/* DETALLE DEL PRODUCTO */}
      <main className="grow max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Imagen */}
        <div className="flex justify-center">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="rounded-2xl shadow-lg w-full max-w-md object-contain"
          />
        </div>

        {/* Información */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {producto.nombre}
          </h2>
          <p className="text-blue-600 text-2xl font-semibold mb-3">
            {producto.precio}
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            {producto.descripcion}
          </p>

          {/* Info adicional */}
          <ul className="text-sm text-gray-700 space-y-2 mb-6">
            <li>
              <strong>Categoría:</strong> {producto.categoria}
            </li>
            <li>
              <strong>Garantía:</strong> {producto.garantia}
            </li>
            <li>
              <strong>Disponibilidad:</strong>{" "}
              <span className="text-green-600 font-semibold">
                {producto.disponibilidad}
              </span>
            </li>
          </ul>

          {/* Cantidad */}
          <div className="flex items-center gap-3 mb-6">
            <span className="text-gray-600 font-medium">Cantidad:</span>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={decrementar}
                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-4 py-1">{cantidad}</span>
              <button
                onClick={incrementar}
                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Botón */}
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2">
            <LuShoppingCart size={20} /> Agregar al carrito
          </button>
        </div>
      </main>

      {/* PRODUCTOS RELACIONADOS */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">
          Productos relacionados
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {productosRelacionados.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={p.imagen}
                alt={p.nombre}
                className="w-full h-48 object-contain p-3 bg-gray-50"
              />
              <div className="p-4">
                <h4 className="font-semibold text-gray-800">{p.nombre}</h4>
                <p className="text-blue-600 font-medium mt-1">{p.precio}</p>
                <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Ver producto
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-6 text-center">
        © 2025 ElectroShop — Todos los derechos reservados.
      </footer>
    </div>
  );
}
