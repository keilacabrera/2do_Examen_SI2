import { useState } from "react";
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion";
import { IoStorefront } from "react-icons/io5";
import { LuShoppingCart, LuSearch, LuUser, LuMenu, LuX } from "react-icons/lu";

export default function Header({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3); // 👈 ejemplo: 3 productos en carrito

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleUserMenu = () => setUserMenuOpen(!userMenuOpen);

  return (
    <div>
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
              `}
      </style>
      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* LOGO */}
          <div className="flex items-center text-teal-600 gap-2">
            <IoStorefront className="inline-block mr-2 " size={40} />
            <h1 className="text-xl font-bold  tracking-tight">
              ElectroSTORE
            </h1>
          </div>

          {/* NAV LINKS - DESKTOP */}
          <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <Link to="/" className="hover:text-teal-600 transition">Inicio</Link>
            <Link to="#" className="hover:text-teal-600 transition">Categorías</Link>
            <Link to="#" className="hover:text-teal-600 transition">Tienda</Link>
            <Link to="#" className="hover:text-teal-600 transition">Servicios</Link>
          </nav>

          {/* ICONOS DERECHA */}

          <div className="hidden md:flex items-center space-x-6 text-gray-700 relative">
            {/* ICONO CARRITO */}
            <Link to="/carrito">
              <div className="relative cursor-pointer hover:text-teal-600 transition">
                <LuShoppingCart size={30} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </div>
            </Link>


            {/* ICONO USUARIO + MENÚ LOGIN/REGISTRO */}
            <div className="relative">
              <button
                onClick={toggleUserMenu}
                className="flex flex-col items-center text-gray-700 hover:text-teal-600 transition"
              >
                <LuUser size={30} />
                <span className="text-xs mt-0.5">Iniciar sesión</span>
              </button>

              <AnimatePresence>
                {userMenuOpen && (
                  <>
                    {/* OVERLAY CLICKEABLE */}
                    <motion.div
                      className="fixed inset-0 z-30"
                      onClick={() => setUserMenuOpen(false)}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.1 }}
                      exit={{ opacity: 0 }}
                    ></motion.div>

                    {/* DROPDOWN */}
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded-lg z-40"
                    >
                      <Link to="/login-admin" className="block px-4 py-2 text-sm text-gray-700 
                    hover:bg-teal-50">Admin</Link>
                      <Link to="/login" className="block px-4 py-2 text-sm text-gray-700 
                    hover:bg-teal-50">Iniciar sesión</Link>
                      <Link to="#" className="block px-4 py-2 text-sm text-gray-700
                     hover:bg-teal-50">Registrate</Link>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* BOTÓN MENU MÓVIL */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {menuOpen ? <LuX size={28} /> : <LuMenu size={28} />}
          </button>
        </div>

        {/* MENU MÓVIL - DRAWER DERECHA */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* OVERLAY OSCURO */}
              <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black z-40"
                onClick={() => setMenuOpen(false)}
              ></motion.div>

              {/* DRAWER MENU */}
              <motion.div
                key="drawer"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 md:hidden flex flex-col"
              >
                <div className="flex justify-between items-center px-4 py-3 border-b">
                  <h2 className="text-lg font-semibold text-gray-800">Menú</h2>
                  <button onClick={toggleMenu}>
                    <LuX className="w-6 h-6 text-gray-700" />
                  </button>
                </div>

                <nav className="flex flex-col px-6 py-4 space-y-4 text-gray-700 font-medium">
                  <Link to="/" className="hover:text-teal-600 transition">Inicio</Link>
                  <Link to="#" className="hover:text-teal-600 transition">Categorías</Link>
                  <Link to="#" className="hover:text-teal-600 transition">Tienda</Link>
                  <Link to="#" className="hover:text-teal-600 transition">Servicios</Link>
                  <Link to="#" className="hover:text-teal-600 transition">Registrate</Link>
                </nav>

                {/* ICONOS ABAJO */}
                <div className="mt-auto border-t px-6 py-4 flex justify-between items-center">
                  {/* CARRITO CON CONTADOR */}
                  <div className="relative cursor-pointer hover:text-teal-600 transition">
                    <LuShoppingCart className="w-6 h-6" />
                    {cartCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                        {cartCount}
                      </span>
                    )}
                  </div>

                  {/* USUARIO */}
                  <Link to="">
                    <div className="flex flex-col items-center text-gray-700 hover:text-teal-600 transition">
                      <LuUser className="w-6 h-6" />
                      <span className="text-xs mt-0.5">Iniciar sesión</span>
                    </div>
                  </Link>

                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
      <div className='mt-10'>
        {children}
      </div>
    </div>

  );
}
