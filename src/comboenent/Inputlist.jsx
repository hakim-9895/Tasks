import React from 'react'
import { useContext } from 'react'
import {useNavigate} from 'react-router-dom'
import { Inputprovider } from './Contextinput'
import { useState } from 'react'
import axios from 'axios'
import { use } from 'react'
function Inputlist() {
const navigate = useNavigate();
    
    const   {setuser,userid}=useContext(Inputprovider)
    const [input,Setinput]= useState(userid.userdetails);
  console.log(userid.userdetails)
  const [edit,setEdit]=useState('')
  console.log(userid.id)
const handleEdit=async()=>{
    try{
    const response=await axios.patch(`http://localhost:4000/task/${userid.id}`,{userdetails:input})
    navigate('/')
    console.log(response)
    }
    catch(error){
        console.log(error);
        
    }
}


const handlDelete=async()=>{
    try{
      const response =  await axios.delete(`http://localhost:4000/task/${userid.id}`)
      

console.log(response)
}catch{

    }
}

  return (
    <div>
        <p>{userid.username}</p>
<input type='text' value={input} onChange={(e)=>Setinput(e.target.value)}></input>
      <button onClick={()=>handleEdit()}>edit</button>
      <button onClick={()=>handlDelete()}>delete</button>
    </div>
  )
}

export default Inputlist
