import React from 'react'
import {Formik,Field,Form} from 'formik'
import { useState } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { Inputprovider } from './Contextinput'
import {useNavigate} from 'react-router-dom'
function Taskinput() {
const {setrender}= useContext(Inputprovider)
const navitgation=useNavigate()

  return (
    <div>

        <Formik
          initialValues={{username:"",
                         userdetails:"",
             
      


          }}
          onSubmit={async(value)=>{
              try{
                const responce=await axios.post('http://localhost:4000/task',value)
                        setrender((prev)=>!prev)
                        navitgation('/')
                        
              }catch{

              }
          }}
          
          >
            <Form>
            <Field type='text'
                name='username'
                placeholder="username"
                ></Field>
                 <Field type="text"
                   name='userdetails'
                    
                        placeholder="details">
                    </Field>
                    <button type='submit'>
                        submit</button>
            </Form>

        </Formik>


      
    </div>
  )
}

export default Taskinput
