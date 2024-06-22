import React from 'react'
import Nav from './nav'
import Dbody from './Dbody'
import Footer from './Footer'

function Dashboard() {
  return (
    <div className='dashboard'>
        <Nav />
        <Dbody />
        <Footer />
    </div>
  )
}

export default Dashboard