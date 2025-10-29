import React, { useState } from 'react'
import { PiShoppingCartBold } from "react-icons/pi";
import { HiMenu } from "react-icons/hi";

export default function Navbar(){
    return (
        <div className="flex items-center justify-between 
        bg-white px-7 py-3 shadow-md text-gray-700 font-semibold">
           <h1 className='font-bold'>Dashboard</h1>
            <div className='flex items-center gap-4'>
                <button>
                    <PiShoppingCartBold className="text-4xl"/>
                </button>

                <div className='flex items-center gap-3'>
                    <HiMenu className='text-4xl'/>
                    <h2 className='font-medium'>Keila Cabrera</h2>
                </div>
            </div>
        </div>
    )
}
