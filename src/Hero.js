import React, { useState, useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import './Hero.css'
import TextTransition, { presets } from "react-text-transition";
import { Button } from 'primereact/button';

import { Ripple } from 'primereact/ripple';

import "primereact/resources/primereact.min.css";

const Hero = () => {

  const service_list = [
    "WEB DEVELOPMENT",
    "E-COMMERCE",
    "SEO",
    "CONTENT WRITING",
    "DATABASE INTEGRATION",
    "EMAIL"

  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const splineAnimation = document.querySelector('.spline');

    const disableSplineAnimation = () => {
      
      if (window.scrollY > 600) {
        splineAnimation.style.display = 'none';
      } else {
        splineAnimation.style.display = 'flex';
      }
    }

    window.addEventListener('scroll', disableSplineAnimation);

    return () => window.removeEventListener('scroll', disableSplineAnimation);
  }, []);


  useEffect(() => {

    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );

    return () => { clearTimeout(intervalId) };
  }, [index]);




  const [loaded, setLoaded] = useState(false);

  function handleLoad() {
    setLoaded(true);
  }









  return (
    <div id='hero' className="m-0 w-full p-0" >

      <div className=" absolute w-5 p-5   m-8  ">


        <h1 className='font-semibold mt-4 p-1 text-6xl text-primary'>
          <TextTransition inline springConfig={presets.gentle}>{service_list[index % service_list.length]} </TextTransition>
        </h1>


        <h5 className="font-light w-full m-2 mt-5 text-600 text-2xl" > <span className='font-medium'>Looking to establish or expand your business's online presence?</span> Look no further than WebState!
          From website design and development to content writing and e-commerce solutions, we've got you covered.
        </h5>
        <Button label="Contact Us" size="lg" className='shadow-8 surface-0  transition-duration-500 hover:bg-primary-900 text-600 font-medium border-none m-2 mt-3 p-ripple' text raised />
        <Ripple />
        <Button label="Learn More" size="lg" className='shadow-8 surface-0  transition-duration-500 hover:bg-primary-900 text-600 font-medium border-none m-2 mt-3 p-ripple' text raised />
        <Ripple />

      </div>
      <Spline onLoad={handleLoad} style={{ display: loaded ? 'flex' : 'none' }} className="m-0 spline h-full overflow-y-hidden p-0" scene="https://prod.spline.design/TbpyA8VSt6DGU5lD/scene.splinecode" />
    </div>

  );
};

export default Hero;
