import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../Home'

export default function NavBar({query,setQuery,onSearch}) {
  return (
    <nav className='flex bg-black h-[60px] items-center justify-between m-0' >
      <Link className='text-3xl font-bold animate-gradient bg-gradient-to-r from-red-300 via-red-400  
       to-red-500 text-transparent bg-clip-text pl-[5px] hover:cursor-pointer
       ' to = "/">Movies</Link>
      <div>
        <input id = "input-search" className = 
        'border-1 border-[#313131] w-[350px] h-[35px]  rounded-l-[8px] ' 
        placeholder='       Search here ...'
        onChange={(e) => setQuery(e.target.value)} />
        <button className='border-1 border-[#313131] h-[35px] w-[70px] rounded-r-[8px] font-light' onClick={onSearch}>Search</button>
      </div>
      <div>
        <Link to="/" className='font-medium mr-[10px] '>Home</Link>
        <Link to="/favorites" className='font-medium mr-[10px] '>Favorites</Link>
        <Link to="/about" className='font-medium mr-[10px] '>About</Link>
      </div>
    </nav>
  )
}
