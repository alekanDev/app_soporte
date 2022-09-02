import React from 'react'
import '../styles/navbar.css'
import { FaSearch, FaPowerOff } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='navbarContent centerVer'>
      <div className='searchContent centerVer'>
        <div className="search centerVer">
          <form className='searchForm' action="" method="get">
            <FaSearch color={'#EA094B'} size={ 20 } />
            <input type="text" placeholder='Search'/>
          </form>
        </div>
      </div>
      <div className='loginInfo centerVer'>
        <div className="logout">
          <FaPowerOff color='#EA094B' size={ 20 } />
        </div>
      </div>
    </div>
  )
}

export default Navbar