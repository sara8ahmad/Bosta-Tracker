import React from 'react'
import Header from '../ui/Header'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div className='app-layout'>
      <Header />
      <div>
        <main className='main'>
          <Outlet />
        </main>
      </div>

     
    </div>
  )
}

export default AppLayout