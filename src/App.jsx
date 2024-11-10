import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  
  return (
    <div className='overflow-x-hidden text-[#0a283d] antialiased selection:bg-[#78ff85] selection:text-[#ffffff]'>
      <div className='fixed top-0 -z-10 h-full w-full'></div>
      <div className="absolute top-0 -z-10 h-full w-full bg-white"><div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[#78ff85] opacity-50 blur-[80px]"></div></div>

      <div className='container mx-auto px-8'>
      <Navbar/>
      <section id='hero'>
      <Hero />
      </section>

      <About />
      <section id='technologies'>
      <Technologies />
      </section>
      <Experience id='experience'/>
      <section id='projects'>
      <Projects />
      </section>
      <section id='contact'>
      <Contact />
      </section>
      </div>
    </div>
  )
}

export default App