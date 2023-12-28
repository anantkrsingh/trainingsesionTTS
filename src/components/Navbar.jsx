import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='w-full h-auto bg-black flex flex-row justify-between p-8'>

        <div className='flex flex-row self-center items-center'>
            <img src="../src/assets/logo.jpeg" alt="logo" className='h-10 w-10 rounded-full'/>
            <p className='text-white text-center ms-4'>School Website</p>
        </div>

        <div className='flex flex-row self-center text-white'>
            <Link to={"/home"} >
                <p className='mr-4'>Home </p>
            
            </Link>
            <Link to="/about" >
                <p className=''>About</p>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar