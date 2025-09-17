import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col" role="document">
      <Navbar />
      <main className="flex-1" role="main">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout


