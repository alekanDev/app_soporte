import React, { useState } from 'react'
import '../styles/sidebar.css'
import Ruta from './Ruta'
import { FiLayout, FiCamera,FiCodesandbox, FiChevronDown, FiFileText, FiList } from "react-icons/fi"


const value=20

const Sidebar = () => {

  const [subDashboard, setSubDashboard] = useState(false)
  return (
    <div className='sidebarContent'>
        <ul className='itemsMenu'>
          <li onClick={() => {
            setSubDashboard(!subDashboard)
            }}><FiLayout size={value} /><span><Ruta route='' name='Dashboard' /></span><FiChevronDown/>
            </li>
            {subDashboard && (
              <Dashboard />
            )}
          <li> <FiCodesandbox size={value}/> <span><Ruta route='/admin/companies' name='Companies' /></span></li>
          <li> <FiCamera size={value}/> <span><Ruta route='/admin/devices' name='Devices' /></span></li>
        </ul>
    </div>
  )
}

const Dashboard = () =>{
  return(
    <div className='subMenus'>
      <ul className='itemsSubMenus'>
        <li><FiFileText size={value}/><span><Ruta route='/admin/Dashboard/reports' name='Reports' /></span></li>
        <li><FiList size={value}/><span><Ruta route='/admin/Dashboard/lists' name='Lists' /></span></li>
      </ul>
    </div>
  )
}

export default Sidebar