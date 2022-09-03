import React from 'react'
import '../styles/navbar.css'
import { FaSearch, FaPowerOff, FaUser } from "react-icons/fa";

const Navbar = () => {
  const cubiqColor='#EA094B'
  const sizeStandar=25
  return (
    <div className='navbarContent centerVer'>
      <div className='searchContent centerVer'>
        <div className="search centerVer">
          <form className='searchForm' action="" method="get">
            <FaSearch color={cubiqColor} size={ 20 } />
            <input type="text" placeholder='Search...'/>
            <button type='submit'>Search</button>
          </form>
        </div>
      </div>
      <div className='loginInfo centerVer'>
        <div className="userIcon itemLoginInfo center">
          <FaUser color={cubiqColor} size={ sizeStandar } />
        </div>
        <div className="logoutIcon itemLoginInfo center">
          <FaPowerOff color={cubiqColor} size={ sizeStandar } />
        </div>
      </div>
    </div>
  )
}

export default Navbar