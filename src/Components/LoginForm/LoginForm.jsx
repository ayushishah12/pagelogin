/*import React from 'react'
import './LoginForm.css';
import { FaUser,FaLock } from "react-icons/fa";
const LoginForm = () => {
  return (
    <div className='wrapper'>
    <form action=''>
<h2>Login</h2>
     <div className='input-box'> 
        <input type='text' placeholder='Username' required/>
        <FaUser className='icon' />
     </div>
     <div className='input-box'> 
        <input type='password' placeholder='password' required/>
        <FaLock className='icon'/>
     </div>
     <div className="remember-forgot">
        <label> <input type='checkbox'/>Remember Me</label>
        <a href='#'>Forgot Password?</a>
     </div>
     <button type='submit'>Login</button>
     <div className="register-link">
        <p>Don't have an account?
            <a href='#'>Register</a>
        </p>
     </div>
    </form>
    </div>
  )
}

export default LoginForm*/
// LoginForm.js
import React from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    // Add your authentication logic here
    // If login is successful, redirect to the home page
    window.location.href = 'http://localhost:5173/'; // Adjust URL as needed
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleLogin} autoComplete="off">
        <h2>Login</h2>
        <div className='input-box'>
          <input type='text' placeholder='Username' required autoComplete="off" />
          <FaUser className='icon' />
        </div>
        <div className='input-box'>
          <input type='password' placeholder='Password' required autoComplete="off" />
          <FaLock className='icon' />
        </div>
        <div className="remember-forgot">
          <label>
            <input type='checkbox' /> Remember Me
          </label>
          <a href='#'>Forgot Password?</a>
        </div>
        <button type='submit'>Login</button>
        <div className="register-link">
          <p>Don't have an account?
            <a href='#'>Register</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
