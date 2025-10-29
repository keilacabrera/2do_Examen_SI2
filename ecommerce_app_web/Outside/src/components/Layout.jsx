import React, { useState } from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

const Layout = ({children}) =>{
    // const { content } = props
  const [isOpen, setisOpen] = useState(true)
    
  const toggleSidebar = () => {
    setisOpen(!isOpen);
  }   
  return (
    <div className={`flex bg-slate-100`}>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
      <div className={`flex-1 bg-slate-200 transition-all
      duration-300
      ${isOpen ? 'md:ml-44' : 'ml-16'}`}>
        <Navbar />
        <div className='mt-4'>
          {children}
        </div>
        
      </div>
      

    </div>
  )
}
export default Layout
