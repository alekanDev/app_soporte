import React from 'react'
import Ruta from './Ruta'
import { FiPlus, FiFileText } from 'react-icons/fi'



const SubDevices = () => {
  const value = 20

  return(
    <div className='subMenus'>
      <ul className='itemsSubMenus'>
        <li><FiPlus size={value}/><span><Ruta route='/admin/devices/addDevice' name='add Device' /></span></li>
        <li><FiFileText size={value}/><span><Ruta route='/admin/devices/reports' name='Reports' /></span></li>
      </ul>
    </div>
  )
}

export default SubDevices