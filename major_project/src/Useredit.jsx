import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { updateuser } from './api/userService';
import { useNavigate } from 'react-router-dom';
const Useredit = () => {
  const navigate=useNavigate();
    const {id}=useParams()
    const [user_data,update_user_data]=useState([]);
        const [name,updatename]=useState("");
        const [email,updateemail]=useState("");
        const [password,updatepassword]=useState("");
        useEffect(()=>{
          const data=JSON.parse(localStorage.getItem("user_data"))||[];
          const data1=data.find((i)=>i.id===id);
          updatename(data1.name)
          updateemail(data1.email)
          updatepassword(data1.password)
        },[id])

        const edit=async(e)=>{
          e.preventDefault();
          const user={name,email,password}
          await updateuser(id,user)
          navigate("/admin")
        }

  return (
    <>
    <form action="">
        <input type="text" value={name} onChange={(e)=>updatename(e.target.value)} /> <br />
        <input type="text" value={email} onChange={(e)=>updateemail(e.target.value)} /> <br />
        <input type="text" value={password} onChange={(e)=>updatepassword(e.target.value)} />
        <button onClick={edit}>update</button>
        {id}
        
    </form>
    </>
  )
}

export default Useredit
