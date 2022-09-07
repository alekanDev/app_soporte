import React from 'react'
import '../styles/publicLayout.css'

const Public = ({ Children }) => {
  return (
    <div className='publicLayout'>
        <main className='mainPublic center'>
          { Children }
        </main>
    </div>
  )
}

export default Public