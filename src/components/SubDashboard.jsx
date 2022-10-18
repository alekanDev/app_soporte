import React from 'react'
import Ruta from './Ruta'
import { FiList } from 'react-icons/fi'


const SubDashboard = () => {
  const value = 20
  
  return(
    <div className='subMenus'>
      <ul className='itemsSubMenus'>
        <li><FiList size={value}/><span><Ruta route='/admin/Dashboard/lists' name='Lists' /></span></li>
      </ul>
    </div>
  )
}

export default SubDashboard