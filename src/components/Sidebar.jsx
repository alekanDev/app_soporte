import React, { useState } from 'react'
import '../styles/sidebar.css'
import Ruta from './Ruta'
import { FiLayout, FiCamera,FiCodesandbox } from "react-icons/fi"
// import { FiFileText, FiList } from 'react-icons/fi'
// import { FiPlusSquare } from 'react-icons/fi'

import SubDashboard from './SubDashboard'
import SubDevices from './SubDevices'

const value=20

const Sidebar = () => {

  const [subDashboard, setSubDashboard] = useState(false)
  const [subDevices, setSubDevices] = useState(false)

  return (
    <div className='sidebarContent'>
        <ul className='itemsMenu'>
          <li onClick={() => {
            setSubDashboard(!subDashboard)
            }}><FiLayout size={value} /><span><Ruta route='/admin/Dashboard' name='Dashboard' /></span>
          </li>

          {
            subDashboard && (
              <SubDashboard />
            )
          }

          <li onClick={() => {
            setSubDevices(!subDevices)
          }}> <FiCodesandbox size={value}/> <span><Ruta route='/admin/devices' name='Devices' /></span>
          </li>

          {
            subDevices && (
              <SubDevices />
            )
          }

          <li> <FiCamera size={value}/> <span><Ruta route='/admin/companies' name='Companies' /></span></li>
        </ul>
    </div>
  )
}

export default Sidebar