import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Problems from './Pages/Problems'
import ProblemDetail from './Pages/ProblemDetail'
import Discuss from './Pages/Discuss'
import Store from './Pages/Store'
import Login from './Pages/Login'
import Register from './Pages/Register'
import Contest from './Pages/Contest'
// Removed DSA Tracker

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/problems" element={<Problems/>} />
        <Route path="/problems/:id" element={<ProblemDetail/>} />
        <Route path="/discuss" element={<Discuss/>} />
        <Route path="/store" element={<Store/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/contest" element={<Contest/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App