import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import { Routes, Route } from'react-router-dom'
import Home from './components/Home'
import Quiz from './components/Quiz'
import Result from './components/Result'
import Login from './components/Login'
import './App.css'

function App() {
 

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  )
}

export default App
