import React from 'react'
import { useState,useEffect } from 'react'
import { getuser ,adduser,deleteuser} from './api/userService'
import { BrowserRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import "./css/Admin.css"

const Admin = () => {
         //for get data from json server    
       const[user_data,update_user_data]=useState([]);
       const[name,update_name]=useState("");
       const[email,update_email]=useState("");
       const[password,update_password]=useState("");
       
       useEffect(()=>{
        const fetchuser=async()=>{
            const data=await getuser();
            update_user_data(data);
        }
        fetchuser()
       },[])

       //for put data in json server

       const handaladduser=async()=>{
        if(name && email && password){
          const newuser={name,email,password}
          const adduser1=await adduser(newuser)

          update_user_data((prev)=>[...prev,adduser1])
          update_name("");
          update_email("");
          update_password("");


        }
        else{
          alert("Please fill all the fields")
        }
       }

       const handeldelete=async(id)=>{
        const deleteuser1=await deleteuser(id)
        update_user_data(user_data.filter((user)=>user.id!==id))
       }
       //for update

      //  const edit=async(e)=>{
      //   e.preventDefult();
      //   const user={name,email,password}
      //   await updateuser(id,user)
      //  }


  return (
    <>

    <div className="admin_boss">
      <div className="admin_main">
      <h1 >Admin</h1>

<table>
  <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Email</th>
      <th>Password</th>
      <th>Remove</th>
      <th>Delete</th>
   

  </tr>
  {
      user_data.map((item)=>(
          <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td><button>remove</button></td>
              <td><button onClick={()=>handeldelete(item.id)}>delete</button></td>
 
          </tr>
      ))
  }
</table>

<form action="">
      <input type="text" value={name} onChange={(e)=>update_name(e.target.value)} placeholder='enter your name'/><br></br>
      <input type="text" value={email} onChange={(e)=>update_email(e.target.value)} placeholder='enter your email'/> <br />
      <input type="text" value={password} onChange={(e)=>update_password(e.target.value)} placeholder='enter password' /> <br />
      <button onClick={handaladduser}>Add User</button>
    </form>

      </div>
    </div>

    
      
    </>
  )
}

export default Admin
