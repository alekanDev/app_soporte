import React from 'react'
import '../styles/footer.css'
import { RiCopyrightLine } from "react-icons/ri";


const Footer = () => {
  return (
    <div className='footerContent'>
      <RiCopyrightLine size={10}/> 2022 <span>Project designed and developed by alekanDev</span> 
    </div>
  )
}

export default Footer