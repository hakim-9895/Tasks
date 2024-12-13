import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Taskinput from './comboenent/Taskinput'
import Home from './comboenent/Home'
import Contextinput from './comboenent/Contextinput'
import Inputlist from './comboenent/Inputlist'


function App() {


  return (
    <>

<Contextinput>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='taskinput' element={<Taskinput/>}/>
  <Route path='inputlist' element={<Inputlist/>}/>

  
</Routes>
</Contextinput>



    
    </>
  )
}

export default App
