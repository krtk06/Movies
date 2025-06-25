import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Home'
import Favorites from './Components/Favorites'
import About from './Components/About'
export default function App() {
  return (
    <main className='bg-[#141414] min-h-screen text-white'>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/favorites" element = {<Favorites/>}/>
        <Route path = "/about" element = {<About/>}/>
      </Routes>
    </main>
  )
}
