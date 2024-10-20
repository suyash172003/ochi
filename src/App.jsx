import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marque from './components/Marque'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const scroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen bg-black text-white'>
      <Navbar/>
      <Landing/>
      <Marque/>
      <About/>
      <Eyes/>
      <Featured/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App