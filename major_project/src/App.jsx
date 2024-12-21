import React from 'react'
import Admin from './Admin'
import Navbar from './Nav'
import User_signup from './USER/User_signup';
import Useredit from './Useredit';
import Login from './USER/Login';
// import Signup from './Signup'
// import Login from './Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <>

     <Router>
       <Navbar/>
       <Routes>
       <Route path="/" element={<User_signup />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/useredit/:id" element={<Useredit />} />
          <Route path="/login/:email" element={<Login />} />

       </Routes>
    </Router>
 
    </>
  )
}

export default App

