import React from 'react'
import '../styles/index.css'
import Ruta from '../components/Ruta'

const Index = () => {
  return (
    <div className='indexContent centerCol'>
        <h1>Welcome to CubiQ support app</h1>
        <div className='btnLogin center'>
          <Ruta route='/admin/Dashboard' name='Login' />
        </div>
        <div className="btnLogin center">
          <Ruta route='/register' name='Register' />
        </div>
    </div>
  )
}

export default Index