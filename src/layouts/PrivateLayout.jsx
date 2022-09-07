import React from 'react'
import '../styles/privateLayout.css'
import logo from '../images/logo.png'

// Components
import Sidebar from '../components/Sidebar.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

const Admin = ({ Children }) => {
  return (
    <div className='privateLayout'>
      <div className='leftPrivate'>
        <div className="logo">
          <img src={ logo } alt="" />
        </div>
        <div className="sideBar">
          <Sidebar />
        </div>
      </div>
      <div className='rightPrivate'>
        <div className='navbarPrivate'>
          <Navbar />
        </div>
        <main className='mainPrivate'>
          {Children}
        </main>
        <div className='footerPrivate'>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Admin