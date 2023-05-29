import React from 'react'
import {HiTrendingUp} from 'react-icons/hi'
import {MdLocalMovies} from 'react-icons/md'
import {MdOutlineSlideshow} from 'react-icons/md'
import {AiOutlineSearch} from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
const Footer = ({setUrl}) => {
  return (
    <div className='flex fixed -bottom-2 h-20 bg-black text-white w-[100dvw] items-center justify-center space-x-10 lg:space-x-20'>
        <NavLink to='/'>
            <div className='flex flex-col items-center text-lg' onClick={()=>window.scrollTo(0,0)}>
                <HiTrendingUp/>
                <p className='font-semibold'>Trending</p>
            </div>
        </NavLink>
        <NavLink to='/movies'>
            <div className='flex flex-col items-center text-xl' onClick={()=>window.scrollTo(0,0)}>
                <MdLocalMovies/>
                <p className='font-semibold'>Movies</p>
            </div>
        </NavLink>
        <NavLink to='/tvshows'>
            <div className='flex flex-col items-center text-xl' onClick={()=>window.scrollTo(0,0)}>
                <MdOutlineSlideshow/>
                <p className='font-semibold'>TV Shows</p>
            </div>
        </NavLink>
        <NavLink to='/search'>
            <div className='flex flex-col items-center text-xl' onClick={()=>window.scrollTo(0,0)}>
                <AiOutlineSearch/>
                <p className='font-semibold'>Search</p>
            </div>
        </NavLink>
        
    </div>
  )
}

export default Footer