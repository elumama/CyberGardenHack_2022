import { useState } from 'react'
import React from 'react';
import {  BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import AppRouted from "./components/AppRouted";
import MyNav from "./components/MyNav";


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
