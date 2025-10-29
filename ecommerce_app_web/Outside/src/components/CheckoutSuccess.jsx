import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { LuCircleCheckBig, LuHouse, LuShoppingBag } from "react-icons/lu";
import confetti from "canvas-confetti";
import ConfettiEffect from "../components/ConfettiEffect"

const CheckoutSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 🎉 Lanzar confeti al cargar
  // useEffect(() => {
  //   confetti({
  //     particleCount: 120,
  //     spread: 80,
  //     origin: { y: 0.6 },
  //   });

  //   // 🕒 Redirigir automáticamente al inicio después de 6 segundos
  //   const timer = setTimeout(() => {
  //     navigate("/");
  //   }, 8000);

  //   return () => clearTimeout(timer);
  // }, [navigate]);

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gray-100 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <ConfettiEffect /> {/* 🎊 efecto visual */}
      <motion.div
        className="bg-white shadow-lg rounded-2xl p-8 sm:p-10 text-center max-w-lg w-full"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 150, damping: 10 }}
          className="flex justify-center mb-6"
        >
          <LuCircleCheckBig size={90} className="text-green-500" />
        </motion.div>

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
          ¡Gracias por tu compra! 🎉
        </h1>
        <p className="text-gray-600 mb-6">
          Tu pedido ha sido procesado exitosamente.  Pronto recibirás un correo con los detalles y la confirmación del envío.
        </p>

        {/* Resumen del pedido */}
        <div className="bg-gray-50 p-4 rounded-xl border mb-6 text-left">
          <h2 className="font-semibold text-gray-700 mb-3 text-lg">
            Resumen del pedido:
          </h2>
          <ul className="space-y-2 text-gray-600">
            <li className="flex justify-between">
              <span>Refrigerador Samsung 320L</span>
              <span>Bs. 2850</span>
            </li>
            <li className="flex justify-between">
              <span>Microondas LG 23L</span>
              <span>Bs. 690</span>
            </li>
            <hr className="my-2" />
            <li className="flex justify-between font-semibold text-gray-800">
              <span>Total:</span>
              <span className="text-blue-600">Bs. 3540</span>
            </li>
          </ul>
        </div>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/productos")}
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            <LuShoppingBag size={20} />
            Seguir Comprando
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition font-semibold"
          >
            <LuHouse size={20} />
            Volver al Inicio
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CheckoutSuccess;
