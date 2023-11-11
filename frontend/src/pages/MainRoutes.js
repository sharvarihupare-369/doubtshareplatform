import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Dashboard from './Dashboard';

const MainRoutes = () => {
  return (
    <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/signup' element={<Signup/>} />
       <Route path='/login' element={<Login/>} />
       <Route path='/dashboard' element={<Dashboard/>} />
    </Routes>
  )
}

export default MainRoutes