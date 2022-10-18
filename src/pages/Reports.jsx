import React, { useEffect, useState, useRef } from 'react'
import '../styles/reports.css'

import { ToastContainer, toast, Flip } from 'material-react-toastify'
import 'material-react-toastify/dist/ReactToastify.css'
import { FiEye } from "react-icons/fi";

const Reports = () => {
  const user = 'test.user'
  const date = new Date()
  const sucessNotify = () => toast.success(`saved correctly`)
  

  let [reports, setReports] = useState([])
  
  const form = useRef(null)

  const submitForm = (e) => {
    e.preventDefault()
    const fd = new FormData(form.current)
    
    const newReport = {}
    fd.forEach((value, key) => {
      newReport[key] = value
    })
    console.log(newReport)
    setReports([...reports, newReport])
  }
  return (
    <div className='formReportsContent'>
      <div className="formContentReports">
        <form ref={ form } onSubmit={ submitForm } >
          <div className="dateInfo">
          <h3>Report</h3>
          <input name='username' type="text" defaultValue={user} />
          <input name='date' type="text" defaultValue={date.toDateString()}/>
          <input name='device' type="text" placeholder='Device' />
          </div>
          <div className="description">
            <h3>Visit description</h3>
            <textarea name='description' type="text"/>
          </div>
          <div className="btnSubmit">
            <button className='buttonSub' onClick={ sucessNotify } type='submit'>Save</button>
            <ToastContainer position={'top-right'} autoClose={2000} transition={Flip} />
          </div>
        </form>
      </div >
      <div className="reportsList">
        <h3>List of reports</h3>
        <div className="ulReports">
          <ListReports reports={reports} />
        </div>
      </div>
    </div>
  )
}

const ListReports = ({ reports }) => {
  useEffect(() => {
    console.log('carga de reportes ok_')
  },[reports])

  let key = 0

  return(
    <ul >
      {
        reports.map((el) => {
          key = key+1
          return(
            <li key={key}>{`${el.date} _ ${el.username}`}
              <span className='iconView'>
                <FiEye onClick={() => {
                  alert(el.description)
                }}/>
              </span>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Reports