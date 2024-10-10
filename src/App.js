import React from 'react'
import Navbar from './components/navbar/Navbar'
import Homepage from './components/homepage/Homepage'
import Skills from './components/Skills/Skills'
import Contact from './components/contact/Contact'
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <div className='App'>
       <Navbar window = {window}/>
       <Homepage />
       <Skills />
       <Projects />
       <Contact />
       <Footer />
      
 
    </div>

  )
}

export default App

