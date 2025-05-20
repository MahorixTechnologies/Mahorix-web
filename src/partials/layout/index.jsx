'use client'
import React from 'react'
import { Footer, Navbar } from '..'

const Layout = ({ children, className }) => {
  return (
    <div className='w-100% h-screen flex flex-col bg-[#F9F9F9]'>
      <Navbar />
      <div className={className}>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout