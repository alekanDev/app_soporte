import React from 'react'
import '../styles/sidebar.css'
import { FaCity, FaHome, FaSimplybuilt } from "react-icons/fa"



const Sidebar = () => {
  return (
    <div className='sidebarContent'>
        <ul className='itemsMenu'>
          <li> <FaHome /> <span>Home</span></li>
          <li> <FaCity/> <span>Companies</span></li>
          <li> <FaSimplybuilt /> <span>Devices</span></li>
          
        </ul>
    </div>
  )
}

export default Sidebar