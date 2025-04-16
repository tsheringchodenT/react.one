import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Home from './layout/Home'
import About from './layout/About'
import Login from './layout/Login'

const App = () => {
  return (
    <div className='container'>
      <nav className='nav'>
        <Link to='/' className='nav-link'>
        Home
        </Link>
        <Link to='/about' className='nav-link'>
        About
        </Link>
        <Link to='/login' className='nav-link'>
        Login 
        </Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={
          <div className='page'>
            <h1>🚫 404 Page not found</h1>
          </div>
        }
        />
      </Routes>
    </div>
  )
}

export default App