import { useState } from 'react'
import React from 'react';
import {  BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import MyNav from "./components/MyNav";
import AppRouted from "./components/AppRouted";
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
            

    <BrowserRouter>
    <MyNav/> 
      <AppRouted/>
      
    </BrowserRouter>
</div>
  )
}

export default App
