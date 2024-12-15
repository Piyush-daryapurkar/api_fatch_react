import axios from "axios"

const API_URL="http://localhost:3000/data"


//get data from json server
export const getuser=async()=>{
    const response=await axios.get(API_URL)
    return response.data;
}

//insert data inti json server

export const adduser=async(user)=>{
    const response=await axios.post(API_URL,user)
    return response.data

}