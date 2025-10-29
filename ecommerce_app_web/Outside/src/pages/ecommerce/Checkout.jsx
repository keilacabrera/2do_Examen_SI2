import React, { useState } from "react";
import { motion } from "framer-motion";
import { LuCreditCard, LuTruck, LuMapPin, LuUser } from "react-icons/lu";
import CheckoutSuccess from "../../components/CheckoutSuccess";

const Checkout = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    // Simular proceso de compra
    setTimeout(() => {
      setIsConfirmed(true);
    }, 1000); // 1.5 segundos de espera antes de mostrar pantalla de éxito
  };

  // Si ya confirmó, mostrar la pantalla de éxito
  if (isConfirmed) {
    return <CheckoutSuccess />;
  }

  return (
    <motion.div
      className="min-h-screen bg-gray-100 p-4 sm:p-8 flex justify-center items-start"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="w-full max-w-5xl bg-white shadow-lg rounded-2xl p-6 sm:p-10"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 text-center">
          🧾 Finalizar Compra
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Columna izquierda */}
          <div className="space-y-6">
            <section>
              <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-700 mb-4">
                <LuUser size={20} /> Datos del Cliente
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Nombre completo" className="input-field" />
                <input type="email" placeholder="Correo electrónico" className="input-field" />
                <input type="tel" placeholder="Teléfono" className="input-field" />
              </div>
            </section>

            <section>
              <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-700 mb-4">
                <LuMapPin size={20} /> Dirección de Envío
              </h2>
              <div className="space-y-4">
                <input type="text" placeholder="Ciudad" className="input-field" />
                <input type="text" placeholder="Dirección completa" className="input-field" />
                <textarea
                  placeholder="Referencia adicional (opcional)"
                  className="input-field resize-none"
                  rows="3"
                ></textarea>
              </div>
            </section>

            <section>
              <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-700 mb-4">
                <LuCreditCard size={20} /> Método de Pago
              </h2>
              <div className="space-y-3">
                {["Tarjeta de crédito o débito", "Transferencia bancaria", "Pago contra entrega"].map(
                  (metodo) => (
                    <label key={metodo} className="flex items-center gap-2 cursor-pointer">
                      <input type="radio" name="pago" className="accent-blue-600" />
                      <span>{metodo}</span>
                    </label>
                  )
                )}
              </div>
            </section>
          </div>

          {/* Columna derecha */}
          <div className="bg-gray-50 p-6 rounded-xl border space-y-6 shadow-sm">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-gray-700 mb-4">
              <LuTruck size={20} /> Resumen del Pedido
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Refrigerador Samsung 320L</span>
                <span className="font-semibold">Bs. 2850</span>
              </div>
              <div className="flex justify-between">
                <span>Microondas LG 23L</span>
                <span className="font-semibold">Bs. 690</span>
              </div>
              <hr />
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span className="text-blue-600">Bs. 3540</span>
              </div>
            </div>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={handleConfirm}
              className="w-full mt-6 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Confirmar Compra
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Checkout;
