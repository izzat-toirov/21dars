import React from 'react'
import Header from '../../components/header/Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
        <Header/>
        <main>
            <Outlet/>
        </main>
    </>
  )
}

export default MainLayout