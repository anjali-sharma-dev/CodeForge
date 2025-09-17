import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

// pages



import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Discuss from './pages/Discuss'
import Contest from './pages/Contest'
import Store from './pages/Store'

import Problems from './pages/ProblemCard/Problems'
import ProblemCard from './pages/ProblemCard/ProblemCard'


const App = () => {
  return (
    
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/> 
        <Route path="/discuss" element={<Discuss/>}/>
        <Route path="/contest" element={<Contest/>}/>
        <Route path="/store" element={<Store/>}/>
        <Route path='/problems' element={<Problems/>}/>
        <Route path='/problem-card' element={<ProblemCard/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>    
  
    
  )
}

export default App