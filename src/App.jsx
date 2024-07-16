import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Project from './components/Projects'
import Contact from './components/Contact' 
import Aos from 'aos'
import 'aos/dist/aos.css'
// import css from './components/Home.css'
function App() {

  useEffect(() => {
    Aos.init({duration: 1000})
  }, [])
  return (
    <>  
     <Navbar />
     <div className="container">
       <Home />
       <Skills/>
       <Project/>
       <Contact/>
      
     </div>
     </>
  )
}

export default App


