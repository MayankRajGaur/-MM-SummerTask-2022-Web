import React from 'react'
import './App.css'

const admin = () => {
  return (
    <>
      <form action="" className='login'>
          <div>
              <label htmlFor="username">Fullname: </label>
              <input type="text" autoComplete='off' name='username' id='username' />
          </div>
          <br />
          <div>
              <label htmlFor="email">Email: </label>
              <input type="text" autoComplete='off' name='email' id='email' />
          </div>
          <br />
          
          <div>
              <label htmlFor="phone">Phone: </label>
              <input type="number" autoComplete='off' name='phone' id='phone' />
          </div>
          <br />
          <div>
              <label htmlFor="password">Password: </label>
              <input type="password" autoComplete='off' name='password' id='password' />
          </div>
          <br />
          <button type='submit' className='register'>Register</button>
      </form>
    </>
  )
}

export default admin
