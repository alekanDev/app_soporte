import React from 'react'
import '../styles/footer.css'
import { RiCopyrightLine } from "react-icons/ri";


const Footer = () => {
  return (
    <div className='footerContent'>
        <span>Project designed and developed by alekanDev</span> <RiCopyrightLine size={10}/>
    </div>
  )
}

export default Footer