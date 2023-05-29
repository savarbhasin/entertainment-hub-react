import React from 'react'
import logo from '../images/logo.png'
import {BiCameraMovie,BiMoviePlay} from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div className='fixed top-0 h-[100px] w-[100dvw] flex items-center bg-black justify-center space-x-20 z-[10]'>
        <div>
            <BiCameraMovie className='fill-white text-[75px]'/>
        </div>
        <NavLink to='/'>
          <div>
              <img src={logo} alt="" className='translate-y-[1px]' />
          </div>
        </NavLink>
        
        <div>
            <BiMoviePlay className='fill-white text-[75px]'/>
        </div>
    </div>
  )
}

export default Header