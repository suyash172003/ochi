import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Marque from './components/Marque'
import About from './components/About'
import Eyes from './components/Eyes'

function App() {
  return (
    <div className='w-full min-h-screen bg-black text-white'>
      <Navbar/>
      <Landing/>
      <Marque/>
      <About/>
      <Eyes/>
    </div>
  )
}

export default App