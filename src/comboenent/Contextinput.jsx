import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

import {useNavigate} from 'react-router-dom'
export const Inputprovider=createContext()
function Contextinput({children}) {


    const navigate=useNavigate()
const [input,setInput]=useState([])
const [render,setrender]=useState(false)
const [userid,setuserid] =useState(null)
useEffect(()=>{
const handleinput=async()=>{
    const response= await axios.get('http://localhost:4000/task')
 
    setInput(response.data)
 
}

handleinput()
},[render])

const handleButton=(userid)=>{
    setuserid(userid)
    console.log("thisis setuserid",userid);
    navigate('inputlist')


}



  return (
    <div >
        <Inputprovider.Provider value={{input,
            setInput,
            setrender,
            setuserid,
            userid,
            handleButton,
            
        }}>
        {children}
        </Inputprovider.Provider>
      
    </div>
  )
}

export default Contextinput
