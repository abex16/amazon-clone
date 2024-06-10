import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Layourt({children}) {
  return (
    <div>
      <Header />
      
      {children}
      <Footer />
    </div>
  )
}

export default Layourt
