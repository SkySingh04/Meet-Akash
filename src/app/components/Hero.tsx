import React from 'react';
import Typewriter from './Typewriter';
import {Prata}  from "next/font/google"
const prata =  Prata({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
  })
const Hero = () => {
  return (
    <div className={`${prata.className} backdrop-brightness-50`} >
    <div className="h-screen bg-hero-bg  bg-cover	 pt-40   bg-opacity-100 flex flex-col justify-center items-center text-white" data-aos="fade-up">
        <p className="text-5xl font-bold py-4 inline">Hi, I'm Akash!</p>
        <p className="text-5xl font-bold py-4 inline">I'm a</p>
        <Typewriter  />
      
    </div>
    </div>
  );
};

export default Hero;
