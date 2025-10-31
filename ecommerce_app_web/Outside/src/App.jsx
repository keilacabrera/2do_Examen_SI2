import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/ecommerce/Home';
import Layout from './components/Layout';
import AdminLayout from './pages/admin/AdminLayout';
import Productos from './pages/productos/Productos';
import Categoria from './pages/productos/Categoria';
import Usuarios from './pages/usuarios/Usuarios';
import AgregarUsuario from './pages/usuarios/AgregarUsuario';
import Estadisticas from './pages/Ventas/Estadisticas';
import DetalleProducto from './pages/ecommerce/DetalleProducto';
import Carrito from './pages/ecommerce/Carrito';
import Header from './pages/ecommerce/Header';
import Checkout from './pages/ecommerce/Checkout';
import ClienteProfile from './pages/ecommerce/ClienteProfile';
import AdminLogin from './pages/admin/AdminLogin';
import Login from './pages/admin/Login';
import AddProductos from './pages/productos/AddProductos';
// import './App.css'

function App() {
  const location = useLocation()
  const noLayout = location.pathname === "/" || location.pathname === "/detalle-producto" 
                  || location.pathname === "/carrito" || location.pathname === "/checkout"
                  || location.pathname === "/perfil" || location.pathname === "/login-admin"
                  || location.pathname === "/login"

  return (
    <>
      {
        noLayout ?
          <Header>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login-admin" element={<AdminLogin />} />
              <Route path="/login" element={<Login />} />
              <Route path="/detalle-producto" element={<DetalleProducto />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/perfil" element={<ClienteProfile />} />
            </Routes>
          </Header>


          :

          <Layout>
            <Routes>
              <Route>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/usuarios" element={<Usuarios />} />
                <Route path="/usuarios/add" element={<AgregarUsuario />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/productos/add" element={<AddProductos />} />
                <Route path="/categoria" element={<Categoria />} />
                <Route path="/estadistica" element={<Estadisticas />} />
              </Route>
            </Routes>
          </Layout>
      }

    </>
  )
}

export default App
