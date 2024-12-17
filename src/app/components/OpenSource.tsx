'use client'
import React from 'react';
import componentDidMount from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic'
const ReactEmbedGist = dynamic(() => import('react-embed-gist'), {
  ssr: false
})
// import ReactEmbedGist from 'react-embed-gist';

const gistId="6583e1be7b05b818df7d5b224b37df67"
const username="SkySingh04"

const OpenSource = () => {
  if (componentDidMount) {
  return (
    <div id="OpenSource" className="page-section text-base p-5 text-white" data-aos="fade-up">
      <div className="section-title">
        <h2 className="other-header">Open Source Contributions</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  items-center justify-center text-center">
      <div className="h-[200px] w-[200px] relative  mx-auto  justify-center md:flex items-center  rounded-full ring-amber-500 ring-8  hidden ">
          <Image src="/keploy_logo.png" alt="Keploy" width={500} height={500} className="w-5/6 rounded-lg hover:scale-105 transform transition-transform duration-300" /> 
        </div>
      <ReactEmbedGist gist={`${username}/${gistId}`}
       file="1_MergedPR's.MD"
       titleClass='text-5xl font-bold my-4 text-amber-400'
       wrapperClass=' mx-auto'
       />
      </div>

      <hr className="border-t border-blue-400 my-4 mx-auto w-[50%] " />
    </div>
  );}
};

export default OpenSource;
