import { useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css'
import Login from './Login'
import Signin from './Signin'
import Landing from './Landing'

function App() {
  return(
    <div>
      <BrowserRouter>
      <Routes>
         <Route path='/' element ={<Login/>}/>
          <Route path='/signin' element ={<Signin/>}/>
          <Route path='/landing' element ={<Landing/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
  
export default App
