import React from 'react'
import '../styles/sidebar.css'
import Ruta from './Ruta'
// import { FaCity, FaHome, FaSimplybuilt } from "react-icons/fa"
import { FiLayout, FiCamera,FiCodesandbox } from "react-icons/fi"



const Sidebar = () => {
  const value=20
  return (
    <div className='sidebarContent'>
        <ul className='itemsMenu'>
          <li><FiLayout size={value} /><span><Ruta route='/admin' name='Dashboard' /></span></li>
          <li> <FiCodesandbox size={value} /> <span><Ruta route='/admin/companies' name='Companies' /></span></li>
          <li> <FiCamera size={value} /> <span><Ruta route='/admin/devices' name='Devices' /></span></li>
        </ul>
    </div>
  )
}

export default Sidebar