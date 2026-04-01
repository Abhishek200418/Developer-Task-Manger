import { useState } from 'react'
import Add from './Pages/Add'
import Delete from './Pages/Delete'
import Home from './Pages/Home'
import Tasks from "./Pages/TasksPage";
import Update from './Pages/Update'
import Navigation from './Components/Navigation'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
   <BrowserRouter>
   <Navigation/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/add" element={<Add/>}/>
    <Route path="/tasks" element={<Tasks/>}/>
    <Route path="/update" element={<Update/>}/>
    <Route path="/delete" element={<Delete/>}/>
  </Routes>
   </BrowserRouter>
    </div>
  )
}

export default App
