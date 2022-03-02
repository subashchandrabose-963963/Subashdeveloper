import React from 'react'
import { Link } from 'react-router-dom'
// import './style.css'

function LoginFrom(props) {
  return (
    <div style={{ height: '500px' }} className='d-flex align-items-center justify-content-center'>
      <form className='container w-50 p-3 bg-success text-light rounded '>
        <label className='form-label'>Enter Username</label>
        <input id="Uname" className='form-control' type="text" placeholder='Enter Your UserName'></input>
        <label className='form-label'>Enter Email</label>
        <input id='Email' className='form-control' placeholder='Enter Your Email' type="email"></input>
        <label className='form-label'>Enter your password</label>
        <input type='password'  placeholder='Enter Your Password' className='form-control' id='Password'></input>
        <button type='button' className='btn btn-primary mt-3'>
          <Link to='/shopitem' className='text-white text-decoration-none'>Submit</Link>
        </button>
      </form>
    </div>
  )
}

export default LoginFrom