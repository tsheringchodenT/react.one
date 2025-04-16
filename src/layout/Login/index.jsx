import React from 'react'

const Login = () => {
  return (
    <div className='page'>
        <h1>Login</h1>
        <form>
            <label htmlFor="email">Email: </label>
            <input type="email" placeholder='Enter your email here!'/>
            <label htmlFor="password">Password: </label>
             <input type="password" placeholder='Enter your password here!' />
        </form>
        <button className='login'>Login</button>
    </div>
  )
}

export default Login