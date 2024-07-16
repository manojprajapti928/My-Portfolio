import React, { useEffect, useRef } from 'react';
import ManojPdf from '../components/pdf/Manoj.pdf';
import hero from './data/hero.json';
import Typed from 'typed.js';
import "./Home.css"

function Home() {
  // Assuming hero.json has a key named "heroImage" containing the image file name
  // const {imgsrc} = hero;
  const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings:["Welcome to my Profile","My Name is Manoj Prajapat","I'm Front end  developer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    }

   const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  },[]);
  return (
    <div className="container home" id='home'>
      <div className="left"
      data-aos="fade-up-right">
      
      
        <h1 ref={typedRef}>
          
          </h1>
        <a href={ManojPdf} download="Manoj.pdf" className="btn btn-outline-warning my-3">Download Resume</a>
      </div>
      <div className="right" data-aos="fade-up-left">
        <div className="img">
          {/* Assuming your images are stored in the assets folder */}
          <img src={`/assets/${hero.imgsrc}`} alt="hero" height={500} width={500}  />
        </div>
      </div>
    </div>
  );
}

export default Home
