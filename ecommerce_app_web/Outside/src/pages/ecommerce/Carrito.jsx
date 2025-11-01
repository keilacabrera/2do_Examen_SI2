import React from "react";
import { LuTrash2, LuPlus, LuMinus } from "react-icons/lu";
import { motion } from "framer-motion";

// HK3xsK.B6WwgaEs

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Refrigerador Samsung 320L",
      price: 2850,
      quantity: 1,
      image:
        "https://nissei.com/media/catalog/product/cache/24e3af3791642c18c52611620aeb2e21/r/e/rea-crm56hkduw-1.jpg",
    },
    {
      id: 2,
      name: "Microondas LG 23L",
      price: 690,
      quantity: 2,
      image:
        "https://whirlpoolarg.vtexassets.com/arquivos/ids/164359-800-auto?v=638802586287470000&width=800&height=auto&aspect=true",
    },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <motion.div
      className="min-h-screen bg-gray-100 p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="max-w-5xl mx-auto mt-5 bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">🛒 Carrito de Compras</h1>

        <div className="space-y-4">
          {cartItems.map((item) => (
            <motion.div
              key={item.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 border rounded-lg shadow-sm hover:shadow-md transition"
              whileHover={{ scale: 1.01 }}
            >
              {/* Imagen + detalles */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 flex-1">
                <img
                  src={item.image}
                  alt={item.name}
                  className="sm:w-24 h-32 sm:h-24 object-contain rounded-md"
                />
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">Bs. {item.price}</p>
                </div>
              </div>

              {/* Cantidad */}
              <div className="flex items-center justify-between sm:justify-center gap-3">
                <button className="p-1 rounded-md bg-gray-200 hover:bg-gray-300 transition">
                  <LuMinus size={18} />
                </button>
                <span className="px-3 font-semibold">{item.quantity}</span>
                <button className="p-1 rounded-md bg-gray-200 hover:bg-gray-300 transition">
                  <LuPlus size={18} />
                </button>
              </div>

              {/* Precio total */}
              <div className="flex justify-between sm:justify-end items-center gap-4 w-full sm:w-auto">
                <div className="text-lg font-semibold text-gray-800">
                  Bs. {item.price * item.quantity}
                </div>
                <button className="p-2 text-red-500 hover:text-red-700 transition">
                  <LuTrash2 size={22} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Totales */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center border-t pt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2 sm:mb-0">Total:</h2>
          <span className="text-2xl font-bold text-blue-600">Bs. {total.toFixed(2)}</span>
        </div>

        {/* Botones de acción */}
        <div className="mt-6 flex flex-col sm:flex-row justify-end gap-4">
          <button className="px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition">
            Seguir Comprando
          </button>
          <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
            Finalizar Compra
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Cart;