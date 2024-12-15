import React from 'react'
import Admin from './Admin'
import Nav from './Nav'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <>

     <Router>
       <Nav/>
       <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="admin" element={<Admin/>} />

       </Routes>
    </Router>
 
    </>
  )
}

export default App


