import React ,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {getuser} from '../api/userService';

const Login = () => {
  const navigate = useNavigate();
  const [user_data, update_user_data] = useState([]);
  const [name, updatename] = useState("");
  const [email, updateemail] = useState("");
  const [password, updatepassword] = useState("");
  const [error,setError]=useState("");

  useEffect(()=>{
    const fetchuser=async()=>{
      try{
        const data=await getuser();
        update_user_data(data);

      }
      catch(error){
        console.error("error fetching user",error);
      }
    }
 
  })

  const user =user_data.find(i => i.email == email);
  if(user){
    if(user.password == password){
      alert("login")
  }else{
    setError("Invalid Password");
  }}
  else{
    setError("Invalid Email");
  }
  

  return (
    <>

    <h1>login here</h1>
        
        <form action="">
          <div>
            <label htmlFor="">email</label>
            <input type="email"
            value={email}
            onChange={(e)=>updateemail(e.target.value)} 
            placeholder='enter your email'
            required
            />
          </div>
          <div>
            <label htmlFor="">password</label>
            <input type="password"
            value={password}
            onChange={(e)=>updatepassword(e.target.value)}
            placeholder='enter your password'
            required />
          </div>
          {error && <p style={{color:'red'}}>{error}</p>}
          <button type='submit'>Login</button>
        </form>
    
    </>
  )
}

export default Login
