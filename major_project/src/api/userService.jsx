import axios from "axios"

const API_URL="http://localhost:3000/data"


//get data from json server
export const getuser=async()=>{
    const response=await axios.get(API_URL)
    return response.data;
}

//insert data into json server

export const adduser=async(user)=>{
    const response=await axios.post(API_URL,user)
    return response.data

}

//delete data
export const deleteuser=async(id)=>{
    const response=await axios.delete(`${API_URL}/${id}`);
    return response.data 
}

//update

export const updateuser=async(id,user)=>{
    const response=await axios.put(`${API_URL}/${id}`,user)
    return response.data;
}
