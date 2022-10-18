import React from 'react'
import { useRef } from 'react'
import '../styles/register.css'

const Register = () => {

  const formRegister = useRef(null)

  const submitRegister = (e) => {
    e.preventDefault()
    const fdRegister = new FormData(formRegister.current)

    let newUser = {}

    fdRegister.forEach((value, key) => {
      newUser[key] = value
    })
    console.log(newUser)
  }

  return (
    <div className='registerContent center'> 
      <div className='bannerleftRegister'>
        a
      </div>
      <div className='formRegisterContent'>
        <form ref={formRegister} onSubmit={submitRegister}>
          <div className="infoRegister centerCol inputs">
          <input type="email" placeholder='email' name='mailgit ' />
          <input type="text" placeholder='name' name='name'/>
          <input type="text" placeholder='username' name='username' />
          <input type="text" placeholder='password' name='password' />
          <input type="text" placeholder='confirm password' name='confirm' />
          </div>
          <div className="btnRegister">
            <button type='submit'>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register