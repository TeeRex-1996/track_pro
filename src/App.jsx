import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/Register'

function App() {
  return (
   <React.Fragment>
    <Routes>
   <Route path="/" element={<Register />}></Route>
    </Routes>
   </React.Fragment>
  )
}

export default App
