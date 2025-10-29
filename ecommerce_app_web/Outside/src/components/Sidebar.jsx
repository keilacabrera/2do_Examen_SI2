import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
//ICONS
import { MdArrowBackIosNew } from "react-icons/md";
import { FaUserCircle, FaRegUserCircle } from "react-icons/fa";
import {
    LuUsers, LuPackage, LuSettings, LuHouse, LuChevronLeft, LuChevronRight,
    LuNotepadText, LuChartColumn, LuLogOut, LuChartNoAxesCombined
} from "react-icons/lu";

const menuItems = [
    {
        icons: <LuHouse size={25} />,
        label: 'Dashboard',
        path: '/dashboard'
    },
    {
        icons: <LuUsers size={25} />,
        label: 'Usuarios',
        path: '/usuarios'
    },
    {
        icons: <LuPackage size={25} />,
        label: 'Products',
        path: '/productos'
    },
    {
        icons: <LuSettings size={25} />,
        label: 'Settings',
        path: '/dashboard'
    },
    {
        icons: <LuNotepadText size={25} />,
        label: 'Reports',
        path: '/dashboard'
    },
    {
        icons: <LuChartNoAxesCombined size={25} />,
        label: 'Estadísticas',
        path: '/estadistica'
    },
    {
        icons: <LuLogOut size={25} />,
        label: 'Logout',
        path: '/dashboard'
    }
]



const Sidebar = ({ isOpen, toggleSidebar, isLogout }) => {
    return (
        <div className={`fixed left-0 top-0 h-full bg-slate-800
        text-white transition-all z-50 flex flex-col duration-300
        ${isOpen ? 'w-44' : 'w-16 items-center'}`}>

            <div className='flex items-center justify-center
        py-4'>
                <FaUserCircle
                    className={`text-2xl text-teal-700 transition-all
            ${isOpen ? 'w-12' : 'w-8'}`}
                />
            </div>

            <div className='mt-6 flex-1'>
                {menuItems.map((item, index) => {
                    return (
                        <NavLink
                            to={item.path}
                            key={index}
                            className={`m-2 flex cursor-pointer items-center
                            space-x-4 rounded-md px-4 py-3 text-gray-400
                            duration-500 hover:bg-teal-700 hover:text-white
                            ${isLogout ? 'mt-auto hidden' : ''}`}>
                            <div className='text-xl'>{item.icons}</div>
                            {isOpen && <span className='text-[14px] overflow-hidden'>{item.label}</span>}

                        </NavLink>
                    )
                })
                }


            </div>

            <button onClick={toggleSidebar}
                className='m-2 flex items-center justify-center 
        rounded-md bg-gray-700 p-3 text-2xl font-bold
        hover:bg-teal-500 duration-300 transition-all'>
                {isOpen ? <LuChevronLeft /> : <LuChevronRight />}
            </button>
        </div>
    )
}

export default Sidebar
