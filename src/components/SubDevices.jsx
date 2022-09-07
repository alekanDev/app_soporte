import React from 'react'
import Ruta from './Ruta'
import { FiPlusSquare } from 'react-icons/fi'



const SubDevices = () => {
  const value = 20

  return(
    <div className='subMenus'>
      <ul className='itemsSubMenus'>
        <li><FiPlusSquare size={value}/><span><Ruta route='/admin/devices/addDevice' name='add Device' /></span></li>
      </ul>
    </div>
  )
}

export default SubDevices