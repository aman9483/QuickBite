import React from 'react'
import Navbar from './_components/Navbar'
import Footer from "./_components/Footer"



const provider = ({children}) => {
  return (
    <div>

      <Navbar/>

        {children}

        <Footer/>
    </div>
  )
}

export default provider