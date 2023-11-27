import React from 'react'
import PersistentDrawerLeft from './components/navbar'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <Router>
   <>
   
   <PersistentDrawerLeft/>
   <navbar/>

  
   </>
      
   </Router>
  )
}

export default App;
  