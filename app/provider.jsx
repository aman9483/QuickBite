import React from 'react'
import Navbar from './_components/Navbar'

const provider = ({children}) => {
  return (
    <div>

      <Navbar/>

        {children}
    </div>
  )
}

export default provider