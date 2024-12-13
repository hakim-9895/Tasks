import React from 'react'
import { useContext } from 'react'
import { useNavigate} from 'react-router-dom'

import {Link} from 'react-router-dom'
import { Inputprovider } from './Contextinput'
function Home() {

    const {input ,setInput,handleButton}=useContext(Inputprovider)
const navigate=useNavigate()


console.log(input)

     
  return (
    <div>
        <button onClick={()=>navigate('taskinput')}>add task </button>


        {
            <ul>
           {
            input.map((user,intex)=>(
                <li key={intex}><button onClick={()=>handleButton(user)} >{user.username}</button></li>
            ))
           }

            </ul>
        }
      
    </div>
  )
}

export default Home
