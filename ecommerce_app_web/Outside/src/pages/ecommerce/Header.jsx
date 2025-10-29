import React from 'react'
import { LuShoppingCart, LuSearch, LuUser } from "react-icons/lu";
import { IoStorefront } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ children }) => {
  // const navigate = useNavigate();
  // const handleLogout = () => {
  //   // localStorage.removeItem("adminToken");
  //   localStorage.removeItem("adminUser");
  //   navigate("/login-admin");
  // }


  return (
    <div>
      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
              `}
      </style>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-teal-600">
            <IoStorefront className="inline-block mr-2 " size={40}/>
            ElectroSHOP</div>

          <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2">
            <LuSearch className="text-gray-500 mr-2" size={18} />
            <input
              type="text"
              placeholder="Buscar productos..."
              className="bg-transparent outline-none text-sm w-60"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="text-gray-600 hover:text-teal-600">
              <LuUser size={30} />
            </button>
            <button className="relative text-gray-600 hover:text-teal-600">
              <LuShoppingCart size={30} />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1.5">
                2
              </span>
            </button>
          </div>
        </div>
      </nav>
      <div className='mt-4'>
        {children}
      </div>
    </div>
  )
}
export default Header
