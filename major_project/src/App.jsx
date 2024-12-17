import React from 'react'
import Admin from './Admin'
import Navbar from './Nav'
import Slider from './Slider'
import Signup from './Signup'
import Login from './Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <>

     <Router>
       <Navbar/>
       <Routes>
        <Route path="/" element={<Slider/>}/>
         <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="admin" element={<Admin/>} />

       </Routes>
    </Router>
 
    </>
  )
}

export default App

