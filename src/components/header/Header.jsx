import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='mb-[50px]'>
        <div className="container flex justify-between p-2">
        <h3>Profi</h3>
        <ul className='flex gap-5'>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/products"}>Products</NavLink></li>
        </ul>
        </div>
    </div>
  )
}

export default Header