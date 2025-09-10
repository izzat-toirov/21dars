import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layout'
import Products from './products/Products'
import Home from './home/Home'

const Main = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<MainLayout/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='/products' element={<Products/>}/>
        </Route>
    </Routes>
    </>
  )
}

export default Main