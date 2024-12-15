import React, { useState } from 'react';
import "./css/Log_sign.css"
import { useNavigate } from 'react-router-dom';

function Singup() {

  
  
  return (
    <div className='boss'>


      <div className="sign">


      <h1 className='heading1'>Sing Up Page</h1>
  

     <form action="">
        
        name:<input type="text"  placeholder='Enter Your Name'/><br />
        email: <input type="text"  placeholder='Enter Your Email'/> <br />
        password: <input type="text"  placeholder='Enter Your Password'/> <br />
        mobile: <input type="text" placeholder='Enter Your Mobile Number'/> <br />
        
        <button >Signup</button>
        <button>add user</button>

    </form>

      </div>
      
    </div>
  )
}


export default Singup
