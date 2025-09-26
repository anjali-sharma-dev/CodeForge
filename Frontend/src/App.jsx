import React from "react"
import { Route, Routes } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import Login from "./pages/auth_pages/Login"
import Register from "./pages/auth_pages/Register"
import Blog from "./pages/Blog"
import Contest from "./pages/Contest"
import Interview from "./pages/Interview"
import Store from "./pages/Store"
import Problem from "./pages/Problem"

const App = () => {

  return (
     <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/problem" element={<Problem/>} />
        <Route path="/contest" element={<Contest/>} />
        <Route path="/interview" element={<Interview/>} />
        <Route path="/store" element={<Store/>} />
      </Route>
    </Routes>

  )
}

export default App