'use client';
import React, { useEffect } from 'react';
import ReactEmbedGist from 'react-embed-gist';
import Image from 'next/image';

const gistId="6583e1be7b05b818df7d5b224b37df67"
const username="Akash-Singh04"
const OpenSource = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://gist.github.com/Akash-Singh04/6583e1be7b05b818df7d5b224b37df67.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="OpenSource" className="page-section text-base p-5 text-white" data-aos="fade-up">
      <div className="section-title">
        <h2 className="other-header">Open Source Contributions</h2>
      </div>
      <div className="grid grid-cols-1  items-center justify-center text-center">
      {/* <div className="h-[120px] w-[120px] relative  mx-auto md:mx-0 justify-center flex md:hidden ">
          <Image src="/keploy_logo.png" alt="Keploy" width={500} height={500} className="w-5/6 rounded-lg hover:scale-105 transform transition-transform duration-300" /> 
        </div> */}
      <ReactEmbedGist gist={`${username}/${gistId}`}
       file="1_MergedPR's.MD"
       titleClass='text-5xl font-bold my-4 text-amber-400'
       wrapperClass=' mx-auto'
       />
        <hr className="border-t border-blue-400 my-4 mx-auto w-[50%] " />
      </div>
    </div>
  );
};

export default OpenSource;
