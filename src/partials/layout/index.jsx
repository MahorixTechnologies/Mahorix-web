import React from 'react'
import { Footer, Navbar } from '..'

const Layout = ({ children, className }) => {
  return (
    <div className=''>
      <Navbar />
      <div className={className}>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout